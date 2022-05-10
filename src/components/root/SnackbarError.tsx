import React, { ReactElement, useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useRecoilState } from "recoil";
import { errorMessage } from "../../states";

export const SnackbarError = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useRecoilState(errorMessage);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;

    setOpen(false);
    setError(null);
  };

  useEffect(() => {
    if (error === null) return;

    setOpen(true);
  }, [error]);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
