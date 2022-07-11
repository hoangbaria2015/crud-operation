import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  Paper,
  FormLabel,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { ImatisTaskPriority } from "../shared/enums";
import { CategoryDto, EmployeeDto, ImatisTaskDto } from "../shared/models";

interface CreateImatisTaskDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  task: ImatisTaskDto;
  setTask: Dispatch<SetStateAction<ImatisTaskDto>>;
  categories: CategoryDto[];
  bookers: EmployeeDto[];
  handleCreateTask: () => void;
}

const CreateImatisTaskDialog: React.FC<CreateImatisTaskDialogProps> = ({
  open,
  setOpen,
  task,
  setTask,
  categories,
  bookers,
  handleCreateTask,
}) => {
  const [selectedBooker, setSelectedBookers] = useState<EmployeeDto>({
    name: "",
    phoneNumber: "",
  });

  const validateProp = (obj: any) => {
    return obj !== undefined && obj !== null;
  };

  const isDisable: boolean =
    !validateProp(task?.from) ||
    !validateProp(task?.to) ||
    !validateProp(task?.categoryId) ||
    !validateProp(task?.priority) ||
    !validateProp(task?.bookerId);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth={true} maxWidth={"md"} open={open} onClose={handleClose}>
      <DialogTitle>
        New task
        <Button
          disabled={isDisable}
          variant="contained"
          size="large"
          sx={{ float: "right", marginX: 1 }}
          onClick={() => {
            handleCreateTask();
            handleClose();
          }}
        >
          Create
        </Button>
        <Button
          variant="contained"
          size="large"
          sx={{ float: "right", marginX: 1 }}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DialogTitle>
      <DialogContent dividers={true}>
        <Paper variant="outlined" sx={{ marginY: 2 }}>
          <Grid container spacing={3} padding={3}>
            <Grid item xs={6}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Location
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="from-label">From location</InputLabel>
                  <Select
                    fullWidth
                    labelId="from-label"
                    id="from-select"
                    value={task.from}
                    label="From"
                    onChange={(e) => setTask({ ...task, from: e.target.value })}
                  >
                    <MenuItem value={"HN"}>HN</MenuItem>
                    <MenuItem value={"HCM"}>HCM</MenuItem>
                    <MenuItem value={"Singapore City"}>Singapore City</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <TextField
                    size="medium"
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="from-detail"
                    label="From location detail"
                    type="text"
                    variant="outlined"
                    value={task.fromDetail}
                    onChange={(e) =>
                      setTask({ ...task, fromDetail: e.target.value })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="to-label">To location</InputLabel>
                  <Select
                    fullWidth
                    labelId="to-label"
                    id="to-select"
                    value={task.to}
                    label="To"
                    onChange={(e) => setTask({ ...task, to: e.target.value })}
                  >
                    <MenuItem value={"HN"}>HN</MenuItem>
                    <MenuItem value={"HCM"}>HCM</MenuItem>
                    <MenuItem value={"Singapore City"}>Singapore City</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <TextField
                    size="medium"
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="to-detail"
                    label="To location detail"
                    type="text"
                    variant="outlined"
                    value={task.toDetail}
                    onChange={(e) =>
                      setTask({ ...task, toDetail: e.target.value })
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper variant="outlined" sx={{ marginY: 2 }}>
          <Grid container spacing={3} padding={3}>
            <Grid item xs={6}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Task detail
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    fullWidth
                    labelId="category"
                    id="category"
                    value={task.categoryId}
                    label="Category"
                    onChange={(e) =>
                      setTask({ ...task, categoryId: e.target.value })
                    }
                  >
                    {categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    variant="outlined"
                    value={task.description}
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="instruction"
                    label="Instruction"
                    type="text"
                    variant="outlined"
                    value={task.instruction}
                    onChange={(e) =>
                      setTask({ ...task, instruction: e.target.value })
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper variant="outlined" sx={{ marginY: 2 }}>
          <Grid container spacing={3} padding={3}>
            <Grid item xs={6}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Create
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="now"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="now"
                      control={<Radio />}
                      label="Now"
                    />
                    <FormControlLabel
                      value="preorder"
                      control={<Radio />}
                      label="Preorder"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <FormLabel id="priority-radio-buttons-group-label">
                    Priority
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="priority-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) =>
                      setTask({
                        ...task,
                        priority:
                          parseInt(e.target.value) || ImatisTaskPriority.Normal,
                      })
                    }
                  >
                    <FormControlLabel
                      value={ImatisTaskPriority.Normal}
                      control={<Radio />}
                      label="Normal"
                    />
                    <FormControlLabel
                      value={ImatisTaskPriority.Urgent}
                      control={<Radio />}
                      label="Urgent"
                    />
                    <FormControlLabel
                      value={ImatisTaskPriority.Critical}
                      control={<Radio />}
                      label="Critical"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper variant="outlined" sx={{ marginY: 2 }}>
          <Grid container spacing={3} padding={3}>
            <Grid item xs={6}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Booker
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Description"
                    type="text"
                    variant="outlined"
                    value={selectedBooker.name}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sx={{ mb: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id="category">Booker</InputLabel>
                  <Select
                    fullWidth
                    labelId="category"
                    id="category"
                    value={task.bookerId}
                    label="Category"
                    onChange={(e) => {
                      setTask({ ...task, bookerId: e.target.value });
                      setSelectedBookers(
                        bookers.find((x) => x.id === e.target.value) || {}
                      );
                    }}
                  >
                    {bookers.map((booker) => (
                      <MenuItem key={booker.id} value={booker.id}>
                        {booker.phoneNumber}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default CreateImatisTaskDialog;
