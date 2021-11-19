import React, { ReactElement } from "react";
import { Container, Typography } from "@mui/material";

const CompleteMessage = (): ReactElement => {
  const doneGif = "https://i.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.webp";

  return (
    <Container
      sx={{
        textAlign: "center",
      }}
    >
      <img src={doneGif} alt="done-gif" style={{ width: "80%" }} />
      <Typography variant="h6">
        Now, we must review your form, so wait e-mail from our team
      </Typography>
    </Container>
  );
};

export default CompleteMessage;
