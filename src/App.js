// @ts-ignore
import React, { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";



import getDesignTokens from "./styles/MyTheme";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  localStorage.setItem("mode", mode);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>hello world</h1>
      <Button
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
        variant="text"
        color="primary"
      >
        click meeeeeeeeee
      </Button>
    </ThemeProvider>
  );
}

export default App;
