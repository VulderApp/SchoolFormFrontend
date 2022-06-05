import React from "react";
import { useRecoilState } from "recoil";
import { darkMode } from "../../states";
import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeButton = () => {
  const [isDarkMode, setDarkMode] = useRecoilState(darkMode);

  const handleClick = () => setDarkMode(!isDarkMode);

  return (
    <Box sx={{ position: "absolute", padding: "0.5rem", left: 0 }}>
      {isDarkMode ? (
        <IconButton size="large" onClick={handleClick}>
          <LightModeIcon />
        </IconButton>
      ) : (
        <IconButton size="large" onClick={handleClick}>
          <DarkModeIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ThemeButton;
