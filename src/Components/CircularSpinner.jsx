import { Box, CircularProgress } from "@mui/material";

function CircularSpinner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress
        size={20}
        style={{
          color: "white",
        }}
      />
    </Box>
  );
}

export default CircularSpinner;
