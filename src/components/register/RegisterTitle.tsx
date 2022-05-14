import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const RegisterTitle = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Typography sx={{ textAlign: "center" }} variant="h4">
      {t("registerYourSchoolTitle")}
    </Typography>
  );
};

export default RegisterTitle;
