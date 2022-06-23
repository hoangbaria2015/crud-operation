import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StyledTableCell from "./StyleTableCell";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import IconButton from "@mui/material/IconButton";
import CustomizedProgressBars from "./BorderLinearProgress";

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
];

export default function ResourceTable() {
  const [open, setOpen] = React.useState(true);

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Group</StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell>
            <IconButton
              size="small"
              aria-label="Expand"
              sx={{ float: "right", padding: 0 }}
              onClick={() => setOpen(!open)}
            >
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody sx={{ display: open ? "table-row-group" : "none" }}>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <StyledTableCell>
              <CustomizedProgressBars value={2} total={6} />
            </StyledTableCell>
            <StyledTableCell>{row.time}</StyledTableCell>
            <StyledTableCell>{row.content}</StyledTableCell>
            <StyledTableCell>{row.category}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
