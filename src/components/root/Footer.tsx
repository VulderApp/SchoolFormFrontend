import React from "react";
import { Box, Typography } from "@mui/material";

declare const APP_VERSION: string;

const Footer = () => {
  return (
    <Box
      style={{
        position: "fixed",
        bottom: 0,
        paddingBottom: "1rem",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography style={{ color: "#6e6e6e" }}>v{APP_VERSION}</Typography>
    </Box>
  );
};

export default Footer;
