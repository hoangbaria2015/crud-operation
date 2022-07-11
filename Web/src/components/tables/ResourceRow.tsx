import { TableRow } from "@mui/material";
import React from "react";
import { useDrop } from "react-dnd/dist/hooks";
import { DragItemTypes } from "../../shared/constants";
import { ResourceDto } from "../../shared/models";
import CustomizedProgressBars from "../BorderLinearProgress";
import StyledTableCell from "./StyleTableCell";

interface ResourceRowProps {
  item: ResourceDto;
}

const ResourceRow: React.FC<ResourceRowProps> = ({ item }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: DragItemTypes.UnassignedTask,
    drop: (item, monitor) => console.log(item),
    canDrop: () => !item.isBusy,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <TableRow style={{backgroundColor: canDrop ? "green" : "red"}} ref={drop}>
      <StyledTableCell>
        <CustomizedProgressBars value={2} total={6} />
      </StyledTableCell>
      <StyledTableCell>{item.time}</StyledTableCell>
      <StyledTableCell>{item.content}</StyledTableCell>
      <StyledTableCell>{item.category}</StyledTableCell>
    </TableRow>
  );
};

export default ResourceRow;
