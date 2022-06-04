import React, { ReactElement, useEffect } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./view/Register";
import Complete from "./view/Complete";
import { Container, Card, CardContent } from "@mui/material";
import { SnackbarError } from "./components/root/SnackbarError";
import Footer from "./components/root/Footer";
import i18n from "./i18n";
import { LANGUAGE_KEY } from "./contants";
import { language } from "./states";
import { useRecoilState } from "recoil";
import { getLanguageShortCode } from "./components/utils/languageUtil";
import LanguageSelection from "./components/root/LanguageSelection";

const App = (): ReactElement => {
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
    <BrowserRouter>
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
  );
};

export default App;
