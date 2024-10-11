import React, { useState } from "react";
import { Alert, Snackbar, Stack } from "@mui/material";

function AlertMessage(prop) {
  const { status, setShow } = prop;
  const { isSuccess, message } = status;
  const [open, setOpen] = useState(true);
  console.log("Inside alert msg");
  console.log(message);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setShow(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isSuccess ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AlertMessage;
