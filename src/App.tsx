import React, { ReactElement } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Register from "./view/Register";
import Complete from "./view/Complete";
import { Box, Card, CardContent } from "@mui/material";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ minWidth: "400px" }}>
          <CardContent>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/complete" element={<Complete />} />
            </Routes>
          </CardContent>
        </Card>
      </Box>
    </BrowserRouter>
  );
};

export default App;
