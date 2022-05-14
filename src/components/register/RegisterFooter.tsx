import { Button, Container, Divider } from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

declare const APP_URL: string;

const RegisterFooter = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Container>
      <Divider />
      <Container
        sx={{
          display: "flex",
          marginTop: "15px",
          justifyContent: "center",
        }}
      >
        <Button href={APP_URL}>{t("backToVulder")}</Button>
      </Container>
    </Container>
  );
};

export default RegisterFooter;
