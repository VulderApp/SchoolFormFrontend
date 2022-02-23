import React, { ReactElement } from "react";
import { Container, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Message = styled("div")(({ theme }) => ({
  ...theme.typography.body1,
  fontSize: "20px",
}));

const CompleteMessage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        textAlign: "center",
      }}
    >
      <CheckCircleOutlineIcon sx={{ fontSize: "120px", color: "#228B22" }} />
      <Typography variant="h3">{t("completeSubmitTitle")}</Typography>
      <Message>{t("completeSubmitMessage")}</Message>
    </Container>
  );
};

export default CompleteMessage;
