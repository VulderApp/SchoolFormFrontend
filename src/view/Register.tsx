import React, { ReactElement } from "react";
import RegisterForm from "../components/register/RegisterForm";
import { Container } from "@mui/material";
import RegisterFooter from "../components/register/RegisterFooter";
import RegisterTitle from "../components/register/RegisterTitle";

const Register = (): ReactElement => {
  return (
    <Container>
      <RegisterTitle />
      <RegisterForm />
      <RegisterFooter />
    </Container>
  );
};

export default Register;
