import React, { ReactElement } from "react";
import { Box, Button, TextField } from "@mui/material";

const RegisterForm = (): ReactElement => {
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        margin: "5px",
        flexDirection: "column",
      }}
    >
      <TextField label="Your e-mail" variant="outlined" />
      <TextField label="School name" variant="outlined" />
      <TextField label="School website" variant="outlined" />
      <TextField label="School timetable" variant="outlined" />
      <Button variant="outlined">Register</Button>
    </Box>
  );
};

export default RegisterForm;
