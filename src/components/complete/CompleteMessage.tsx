import React, { ReactElement } from "react";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const CompleteMessage = (): ReactElement => {
  const { t } = useTranslation();
  const doneGif = "https://i.giphy.com/media/l0Iyl55kTeh71nTXy/giphy.webp";

  return (
    <Container
      sx={{
        textAlign: "center",
      }}
    >
      <img src={doneGif} alt="done-gif" style={{ width: "80%" }} />
      <Typography variant="h6">{t("completeSubmitMessage")}</Typography>
    </Container>
  );
};

export default CompleteMessage;
