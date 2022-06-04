import React from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { language } from "../../states";

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useRecoilState(language);

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        padding: "0.5rem",
        right: 0,
      }}
    >
      <FormControl variant="standard" sx={{ m: 1 }}>
        <Select value={selectedLanguage} onChange={handleLanguageChange}>
          <MenuItem value="pl">PL</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelection;
