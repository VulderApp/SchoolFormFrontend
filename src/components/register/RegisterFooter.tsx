import { Container, Divider, Typography } from "@mui/material";
import React, { ReactElement } from "react";

const RegisterFooter = (): ReactElement => {
  return (
    <Container>
      <Divider />
      <Container sx={{ marginTop: "15px" }}>
        <Typography sx={{ textAlign: "center" }}>Back to vulder.xyz</Typography>
      </Container>
    </Container>
  );
};

export default RegisterFooter;
