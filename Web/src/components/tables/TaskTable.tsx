import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import StyledTableCell from "./StyleTableCell";
import { ImatisTaskDto } from "../../shared/models";
import { useState } from "react";
import TaskRow from "./TaskRow";

interface TaskTableProps {
  data: ImatisTaskDto[];
}

const TaskTable: React.FC<TaskTableProps> = ({ data }) => {
  const [hoveringItem, setHoveringItem] = useState<ImatisTaskDto>({});

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Priority</StyledTableCell>
          <StyledTableCell>Time</StyledTableCell>
          <StyledTableCell>Contagion</StyledTableCell>
          <StyledTableCell>Category</StyledTableCell>
          <StyledTableCell>Patient name</StyledTableCell>
          <StyledTableCell>From</StyledTableCell>
          <StyledTableCell>To</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody onMouseLeave={() => setHoveringItem({})}>
        {data.map((task) => (
          <TaskRow key={task.id} task={task} hoveringItem={hoveringItem} setHoveringItem={setHoveringItem} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TaskTable;
