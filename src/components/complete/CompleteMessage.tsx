import React, { ReactElement } from "react";
import { Button, Container, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

declare const APP_URL: string;

const Title = styled("div")(({ theme }) => ({
  ...theme.typography.h3,
  fontSize: "34px",
}));

const Message = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "18px",
}));

const CompleteMessage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        textAlign: "center",
      }}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: "8rem", color: "#228B22" }} />
      <Title>{t("completeSubmitTitle")}</Title>
      <Message>{t("completeSubmitMessage")}</Message>
      <Button sx={{ padding: "0.5rem", marginTop: "1rem" }} href={APP_URL}>
        {t("backToVulder")}
      </Button>
    </Container>
  );
};

export default CompleteMessage;
