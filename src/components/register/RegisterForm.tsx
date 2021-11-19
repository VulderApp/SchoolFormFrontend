import React, { ReactElement } from "react";
import { Alert, Button, Container, Snackbar, TextField } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { useFormik } from "formik";
import { sendSchoolForm } from "../../api/api";
import { useNavigate } from "react-router-dom";

const inputStyles: SxProps<Theme> = {
  marginBottom: "20px",
};

type ErrorModel = {
  error: boolean;
  message: string;
};

const RegisterForm = (): ReactElement => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [emailError, setEmailError] = React.useState<ErrorModel>({
    error: false,
    message: "",
  });
  const [schoolNameError, setSchoolNameError] = React.useState<ErrorModel>({
    error: false,
    message: "",
  });
  const [schoolWebsiteUrlError, setSchoolWebsiteUrlError] =
    React.useState<ErrorModel>({
      error: false,
      message: "",
    });
  const [schoolTimetableUrlError, setSchoolTimetableUrlError] =
    React.useState<ErrorModel>({
      error: false,
      message: "",
    });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      schoolName: "",
      schoolWebsiteUrl: "",
      schoolTimetableUrl: "",
    },
    validate: (values) => {
      if (values.email.trim() === "") {
        setEmailError({
          error: true,
          message: "This field is empty",
        });
      }
      if (values.schoolName.trim() === "") {
        setSchoolNameError({
          error: true,
          message: "This field is empty",
        });
      }
      if (values.schoolTimetableUrl.trim() === "") {
        setSchoolWebsiteUrlError({
          error: true,
          message: "This field is empty",
        });
      }
      if (values.schoolWebsiteUrl.trim() === "") {
        setSchoolTimetableUrlError({
          error: true,
          message: "This field is empty",
        });
      }
    },
    onSubmit: async (values) => {
      const statusCode = await sendSchoolForm(
        values.email,
        values.schoolName,
        values.schoolWebsiteUrl,
        values.schoolTimetableUrl
      );

      if (statusCode === 200) {
        navigate("/complete");
        return;
      }

      showSnackbar(`Status code: ${statusCode.toString()}`);
    },
  });

  const showSnackbar = (message: string) => {
    const handleClose = () => setOpenSnackbar(false);

    return (
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    );
  };

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
        type="email"
        sx={inputStyles}
        error={emailError.error}
        helperText={emailError.message}
        label="Your e-mail"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="schoolName"
        sx={inputStyles}
        error={schoolNameError.error}
        helperText={schoolNameError.message}
        label="School name"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.schoolName}
      />
      <TextField
        id="schoolWebsiteUrl"
        sx={inputStyles}
        error={schoolWebsiteUrlError.error}
        helperText={schoolWebsiteUrlError.message}
        label="School website"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.schoolWebsiteUrl}
      />
      <TextField
        id="schoolTimetableUrl"
        sx={inputStyles}
        error={schoolTimetableUrlError.error}
        helperText={schoolTimetableUrlError.message}
        label="School timetable"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.schoolTimetableUrl}
      />
      <Button style={{ marginTop: "30px" }} variant="outlined" type="submit">
        Register
      </Button>
    </Container>
  );
};

export default RegisterForm;
