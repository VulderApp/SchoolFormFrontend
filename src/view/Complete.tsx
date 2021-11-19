import React, { ReactElement } from "react";
import { Container } from "@mui/material";
import CompleteMessage from "../components/complete/CompleteMessage";

const Complete = (): ReactElement => {
  return (
    <Container>
      <CompleteMessage />
    </Container>
  );
};

export default Complete;
