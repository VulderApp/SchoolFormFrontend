import React, { ReactElement, useEffect } from "react";
import { Container } from "@mui/material";
import CompleteMessage from "../components/complete/CompleteMessage";
import { useTranslation } from "react-i18next";

const Complete = (): ReactElement => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("completeSubmitTitle");
  }, []);

  return (
    <Container>
      <CompleteMessage />
    </Container>
  );
};

export default Complete;
