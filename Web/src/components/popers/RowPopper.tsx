import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Divider, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface RowPopperProps {
  isDisplay: boolean;
}

const RowPopper: React.FC<RowPopperProps> = ({ isDisplay }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl) && isDisplay;

  return (
    <>
      <IconButton
        aria-label="more"
        onClick={handleClick}
        sx={{ visibility: isDisplay ? "inherit" : "hidden" }}
      >
        <MoreHorizIcon />
      </IconButton>

      <Popper id={"row-popper"} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={3} variant="elevation">
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Assign" />
                    <IconButton edge="end" aria-label="more">
                      <ArrowRightIcon />
                    </IconButton>
                  </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Copy" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Book return" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Edit" />
                  </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Contact booker" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="Contact responsible nurse" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default RowPopper;
