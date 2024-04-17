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
import Posts from "components/Posts";

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
        <Box

          sx={{
            flexGrow: "1.3",
            display: { xs: "none", xl: "block" },
            bgcolor: "grey.main",
          }}
        >
          <MyList setMode={setMode} mode={mode} />
        </Box>
          <Posts/>
        <Typography
          sx={{ flexGrow: "1.5" }}
          variant="h4"
          color="error"
        >
          welcome
        </Typography>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
