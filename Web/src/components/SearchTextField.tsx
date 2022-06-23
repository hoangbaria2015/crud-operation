import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchTextProps {
  id: string;
  placeholder: string;
}

export const SearchTextField: React.FC<SearchTextProps> = ({
  id,
  placeholder,
}) => {
  return (
    <TextField
      id={id}
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      size="small"
    />
  );
};
