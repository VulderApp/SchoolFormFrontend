import React, { ReactElement } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./view/Register";
import Complete from "./view/Complete";
import { Container, Card, CardContent } from "@mui/material";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
