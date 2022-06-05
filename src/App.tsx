import React, { ReactElement, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./view/Register";
import Complete from "./view/Complete";
import {
  Container,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { SnackbarError } from "./components/root/SnackbarError";
import Footer from "./components/root/Footer";
import i18n from "./i18n";
import { LANGUAGE_KEY } from "./contants";
import { darkMode, language } from "./states";
import { useRecoilState, useRecoilValue } from "recoil";
import { getLanguageShortCode } from "./utils/languageUtil";
import LanguageSelection from "./components/root/LanguageSelection";
import ThemeButton from "./components/root/ThemeButton";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffc107",
    },
    secondary: {
      main: "#ff9100",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: lightTheme.palette.primary,
    secondary: lightTheme.palette.secondary,
  },
});

const App = (): ReactElement => {
  const isDarkMode = useRecoilValue(darkMode);
  const [currentLanguage, setCurrentLanguage] = useRecoilState(language);

  useEffect(() => {
    if (currentLanguage === null) {
      localStorage.setItem(LANGUAGE_KEY, getLanguageShortCode());
      setCurrentLanguage(getLanguageShortCode());
    }

    i18n
      .changeLanguage(currentLanguage)
      .then((_) => localStorage.setItem(LANGUAGE_KEY, currentLanguage));
  }, [currentLanguage]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ThemeButton />
        <LanguageSelection />
        <Container
          sx={{
            display: "flex",
            height: "100%",
            width: "auto",
            minHeight: "90vh",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Card>
            <CardContent>
              <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/complete" element={<Complete />} />
              </Routes>
            </CardContent>
          </Card>
        </Container>
        <SnackbarError />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
