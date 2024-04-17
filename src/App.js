// @ts-ignore
import React, { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import getDesignTokens from "./styles/MyTheme";
import NavBar from "components/NavBar";
import MyList from "components/MyList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  localStorage.setItem("mode", mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />

      <Stack spacing={0} direction={"row"}>
        <Box className="border" sx={{ flexGrow: "1.2" ,display:{ xs:"none",   xl:"block" }}}>
          <MyList setMode={setMode} mode={mode} />
        </Box>
        <Typography
          className="border"
          sx={{ flexGrow: "3" ,height:"100vh" }}
          variant="h1"
          color="primary"
        >
          Hello World
        </Typography>
        <Typography
          className="border "
          sx={{ flexGrow: "1.5" }}
          variant="body1"
          color="initial"
        >
          welcome
        </Typography>
      </Stack>

    </ThemeProvider>
  );
}

export default App;
