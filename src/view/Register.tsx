import React, { ReactElement, useEffect } from "react";
import RegisterForm from "../components/register/RegisterForm";
import { Container } from "@mui/material";
import RegisterFooter from "../components/register/RegisterFooter";
import RegisterTitle from "../components/register/RegisterTitle";
import { useTranslation } from "react-i18next";

const Register = (): ReactElement => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("registerYourSchoolTitle");
  }, []);

  return (
    <Container>
      <RegisterTitle />
      <RegisterForm />
      <RegisterFooter />
    </Container>
  );
};

export default Register;
