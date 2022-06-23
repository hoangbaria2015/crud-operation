import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StyledTableCell from "./StyleTableCell";

function createData(
  name: string,
  priority: string,
  time: string,
  content: string,
  category: string,
  patientName: string,
  from: string,
  to: string
) {
  return { name, priority, time, content, category, patientName, from, to };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt1",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt2",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt3",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt4",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt5",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt6",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
  createData(
    "Frozen yoghurt8",
    "low",
    "12:55",
    "Drape",
    "Ola Nordman",
    "Pasient | Seng",
    "354 (1-seng) > infeksjonmed",
    "Sengesentralen > Bygglokasjoner"
  ),
];

export default function TaskTable() {
  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Priority</StyledTableCell>
          <StyledTableCell>Time</StyledTableCell>
          <StyledTableCell>Content</StyledTableCell>
          <StyledTableCell>Category</StyledTableCell>
          <StyledTableCell>Patient name</StyledTableCell>
          <StyledTableCell>From</StyledTableCell>
          <StyledTableCell>To</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <StyledTableCell>
              <AccessTimeIcon></AccessTimeIcon>
            </StyledTableCell>
            <StyledTableCell>{row.time}</StyledTableCell>
            <StyledTableCell>{row.content}</StyledTableCell>
            <StyledTableCell>{row.category}</StyledTableCell>
            <StyledTableCell>{row.patientName}</StyledTableCell>
            <StyledTableCell>{row.from}</StyledTableCell>
            <StyledTableCell>{row.to}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
