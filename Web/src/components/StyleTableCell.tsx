import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FAFAFA",
    color: "#45464F",
    fontFamily: "Segoe UI",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#000000DE",
    fontFamily: "Segoe UI",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
  },
}));

export default StyledTableCell;