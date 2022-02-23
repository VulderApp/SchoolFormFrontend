import { Button, Container, Divider } from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

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
        <Button href="#text-buttons">{t("backToVulder")}</Button>
      </Container>
    </Container>
  );
};

export default RegisterFooter;
