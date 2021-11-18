import React, { ReactElement } from "react";
import { Button, Container, TextField } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const inputStyles: SxProps<Theme> = {
  marginBottom: "20px",
};

const RegisterForm = (): ReactElement => {
  return (
    <Container
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <TextField sx={inputStyles} label="Your e-mail" variant="outlined" />
      <TextField sx={inputStyles} label="School name" variant="outlined" />
      <TextField sx={inputStyles} label="School website" variant="outlined" />
      <TextField sx={inputStyles} label="School timetable" variant="outlined" />
      <Button style={{ marginTop: "30px" }} variant="outlined">
        Register
      </Button>
    </Container>
  );
};

export default RegisterForm;
