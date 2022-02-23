import { Container, Divider, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { useTranslation } from "react-i18next";

const RegisterFooter = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Container>
      <Divider />
      <Container sx={{ marginTop: "15px" }}>
        <Typography sx={{ textAlign: "center" }}>
          {t("backToVulder")}
        </Typography>
      </Container>
    </Container>
  );
};

export default RegisterFooter;
