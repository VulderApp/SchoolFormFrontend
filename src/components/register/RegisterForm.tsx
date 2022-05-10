import React, { ReactElement } from "react";
import { Button, Container, TextField } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { useFormik } from "formik";
import { submitSchoolForm } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useSetRecoilState } from "recoil";
import { errorMessage } from "../../states";

const inputStyles: SxProps<Theme> = {
  marginBottom: "20px",
};

const RegisterForm = (): ReactElement => {
  const setErrorMessage = useSetRecoilState(errorMessage);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: "",
      schoolName: "",
      schoolWebsiteUrl: "",
      schoolTimetableUrl: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      schoolName: Yup.string().min(10, "Too short!").required("Required"),
      schoolWebsiteUrl: Yup.string().url("Invalid URL").required("Required"),
      schoolTimetableUrl: Yup.string().url("Invalid URL").required("Required"),
    }),
    onSubmit: async (values) => {
      const response = await submitSchoolForm(
        values.email,
        values.schoolName,
        values.schoolWebsiteUrl,
        values.schoolTimetableUrl
      );

      if (typeof response === "string") {
        setErrorMessage(response);
        return;
      }

      if (response?.status !== 200) {
        setErrorMessage(response.data);
        return;
      }

      navigate("/complete");
    },
  });

  return (
    <Container
      component="form"
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <TextField
        id="email"
        name="email"
        type="email"
        sx={inputStyles}
        label={t("emailInputLabel")}
        variant="outlined"
        error={formik.touched.email && formik.errors.email !== undefined}
        helperText={formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="schoolName"
        name="schoolName"
        sx={inputStyles}
        label={t("schoolNameInputLabel")}
        variant="outlined"
        error={
          formik.touched.schoolName && formik.errors.schoolName !== undefined
        }
        helperText={formik.errors.schoolName}
        onChange={formik.handleChange}
        value={formik.values.schoolName}
      />
      <TextField
        id="schoolWebsiteUrl"
        name="schoolWebsiteUrl"
        sx={inputStyles}
        label={t("schoolWebsiteInputLabel")}
        variant="outlined"
        error={
          formik.touched.schoolWebsiteUrl &&
          formik.errors.schoolWebsiteUrl !== undefined
        }
        helperText={formik.errors.schoolWebsiteUrl}
        onChange={formik.handleChange}
        value={formik.values.schoolWebsiteUrl}
      />
      <TextField
        id="schoolTimetableUrl"
        name="schoolTimetableUrl"
        sx={inputStyles}
        label={t("schoolTimetableInputLabel")}
        variant="outlined"
        error={
          formik.touched.schoolTimetableUrl &&
          formik.errors.schoolTimetableUrl !== undefined
        }
        helperText={formik.errors.schoolTimetableUrl}
        onChange={formik.handleChange}
        value={formik.values.schoolTimetableUrl}
      />
      <Button style={{ marginTop: "30px" }} variant="outlined" type="submit">
        {t("registerButton")}
      </Button>
    </Container>
  );
};

export default RegisterForm;
