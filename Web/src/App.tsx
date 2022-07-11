import "./App.css";
import {
  Box,
  Button,
  Chip,
  Container,
  createTheme,
  Grid,
  IconButton,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import TaskTable from "./components/tables/TaskTable";
import { SearchTextField } from "./components/SearchTextField";
import ResourceTable from "./components/tables/ResourseTable";
import FilterPopper from "./components/popers/FilterPopper";
import { useEffect, useState } from "react";
import { CategoryDto, EmployeeDto, ImatisTaskDto } from "./shared/models";
import { categoryService } from "./services/category.service";
import { imatisTaskService } from "./services/imatis-task.service";
import { employeeService } from "./services/employee.service";
import CreateImatisTaskDialog from "./components/CreateImatisTaskDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragPreviewImage, useDrag } from "react-dnd";
import { DragItemTypes } from "./shared/constants";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: {
            variant: "text",
          },
          style: {
            color: "#0E378C",
            fontFamily: "Segoe UI",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "20px",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 10,
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    subtitle2: {
      color: "#000000",
      fontFamily: "Segoe UI",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      color: "#595959",
      fontFamily: "Segoe UI",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
});

function App() {
  const [createTaskOpen, setCreateTaskOpen] = useState(false);
  const [tasks, setTasks] = useState<ImatisTaskDto[]>([]);
  const [bookers, setBookers] = useState<EmployeeDto[]>([]);
  const [categories, setCategories] = useState<CategoryDto[]>([]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [task, setTask] = useState<ImatisTaskDto>({
    categoryId: "",
    from: "",
    fromDetail: "",
    to: "",
    toDetail: "",
    description: "",
    instruction: "",
    bookerId: "",
  });

  const [{ isDragging, canDrag }, drag, preview] = useDrag(() => ({
    type: DragItemTypes.UnassignedTask,
    item: { taskId: "task.id" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      canDrag: !!monitor.canDrag(),
    }),
  }));

  useEffect(() => {
    categoryService.getAll().then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    imatisTaskService.getAll().then((data) => setTasks(data));
  }, []);

  useEffect(() => {
    employeeService.getAll().then((data) => setBookers(data));
  }, []);

  const handleCreateTask = () => {
    imatisTaskService.save(task).then((res) => {
      imatisTaskService.getAll().then((data) => setTasks(data));
    });
    setTask({
      categoryId: "",
      from: "",
      fromDetail: "",
      to: "",
      toDetail: "",
      description: "",
      instruction: "",
    });
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <ThemeProvider theme={theme}>
      <CreateImatisTaskDialog
        open={createTaskOpen}
        setOpen={setCreateTaskOpen}
        task={task}
        setTask={setTask}
        categories={categories}
        bookers={bookers}
        handleCreateTask={handleCreateTask}
      />
      <Box
        component="main"
        sx={{
          padding: 5,
          width: "2600px",
          height: "98vh",
          backgroundColor: "#f5f5f5",
          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Grid container spacing={2} marginBottom={5}>
          <Grid item xs={12}>
            <Button variant="text" startIcon={<SearchIcon />}>
              Task search
            </Button>
            <Button variant="text" startIcon={<RefreshIcon />}>
              Recurring task templates
            </Button>
            <Button
              variant="text"
              startIcon={<AddIcon />}
              onClick={() => setCreateTaskOpen(true)}
            >
              New task
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={10} height="98%">
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Container maxWidth="lg" sx={{ marginBottom: 2 }}>
                <Grid container spacing={2} height="100%">
                  <Grid item>
                    <Typography component="p" variant="subtitle2">
                      Unassigned
                    </Typography>
                    <Typography component="p" variant="caption">
                      11 tasks
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        ref={drag}
                        label="Deletable"
                        variant="outlined"
                        onDelete={handleDelete}
                        deleteIcon={<DeleteIcon />}
                      />
                    </Stack>
                  </Grid>
                  <Grid
                    item
                    xs
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 1,
                    }}
                  >
                    <SearchTextField
                      id="input-with-icon-textfield"
                      placeholder="Search..."
                    />
                    <FilterPopper
                      title="Category"
                      items={
                        categories.map((category) => {
                          return {
                            title: category.name || "",
                            value: category.id || "",
                          };
                        }) || []
                      }
                      checkedItems={checkedItems}
                      setCheckedItems={setCheckedItems}
                    />
                  </Grid>
                </Grid>
              </Container>

              <TaskTable data={tasks} />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
                <Grid container spacing={2} height="100%">
                  <Grid item>
                    <Typography component="p" variant="subtitle2">
                      Resources
                    </Typography>
                    <Typography component="p" variant="caption">
                      11 online
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 1,
                    }}
                  >
                    <IconButton aria-label="delete">
                      <MoreHorizIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Container>

              <ResourceTable />
              <ResourceTable />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Container maxWidth="lg" sx={{ marginBottom: 5 }}>
                <Grid container spacing={2} height="100%">
                  <Grid item>
                    <Typography component="p" variant="subtitle2">
                      Unassigned
                    </Typography>
                    <Typography component="p" variant="caption">
                      11 tasks
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      gap: 1,
                    }}
                  >
                    <SearchTextField
                      id="input-with-icon-textfield"
                      placeholder="Search..."
                    />
                    <FilterPopper
                      title="Category"
                      items={categories.map((category) => {
                        return {
                          title: category.name || "",
                          value: category.id || "",
                        };
                      })}
                      checkedItems={checkedItems}
                      setCheckedItems={setCheckedItems}
                    />
                  </Grid>
                </Grid>
              </Container>
              <TaskTable data={tasks} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default App;
