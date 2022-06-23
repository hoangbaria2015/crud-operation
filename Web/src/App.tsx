import "./App.css";
import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import TaskTable from "./components/TaskTable";
import { SearchTextField } from "./components/SearchTextField";
import ResourceTable from "./components/ResourseTable";
import FilterPopper from "./components/FilterPopper";

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
  return (
    <ThemeProvider theme={theme}>
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
            <Button variant="text" startIcon={<AddIcon />}>
              New task
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} columns={10} height="98%">
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
                    <FilterPopper />
                  </Grid>
                </Grid>
              </Container>

              <TaskTable />
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
                    <FilterPopper />
                  </Grid>
                </Grid>
              </Container>
              <TaskTable />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default App;
