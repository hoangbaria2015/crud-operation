import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import React, { Dispatch, SetStateAction } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListSubheader from "@mui/material/ListSubheader";

interface FilterPopperProps {
  title: string;
  items: { title: string; value: string }[];
  checkedItems: string[];
  setCheckedItems: Dispatch<SetStateAction<string[]>>;
}

const FilterPopper: React.FC<FilterPopperProps> = ({
  title,
  items,
  checkedItems,
  setCheckedItems,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleToggle = (value: string) => () => {
    const currentIndex = checkedItems.indexOf(value);
    const newChecked = [...checkedItems];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedItems(newChecked);
  };

  return (
    <>
      <Button
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        startIcon={<AddIcon />}
        endIcon={<ArrowDropDownIcon />}
      >
        Filter
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={3}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                subheader={
                  <ListSubheader
                    sx={{
                      color: "#000000",
                      fontFamily: "Segoe UI",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {title}
                  </ListSubheader>
                }
              >
                {items.map((item) => {
                  const labelId = `checkbox-list-label-${item.value}`;

                  return (
                    <ListItem key={item.value} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(item.value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checkedItems.indexOf(item.value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.title} />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};

export default FilterPopper;
