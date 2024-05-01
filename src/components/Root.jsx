import React, { useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import getDesignTokens from "styles/MyTheme";
import NavBar from "components/NavBar";
import MyList from "components/MyList";
import Box from "@mui/material/Box";

import Status from "components/Status";
import ModalButton from "components/ModalButton";
import Divider from "@mui/material/Divider";
import { Outlet } from "react-router-dom";

export const PostsContext = React.createContext(undefined);
const Root = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  localStorage.setItem("mode", mode);
  const [show, setShow] = useState("none");
  const [postUpdate, setPostUpdate] = useState(false);
  const [search, setSearch] = useState("");
  
  const handlePostUpdate = () => {
    setPostUpdate(!postUpdate);
  };

  return (
    <PostsContext.Provider value={{ postUpdate, search }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar setShow={setShow} show={show} setSearch={setSearch} />

        <Stack
          spacing={0}
          direction={"row"}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box
            sx={{
              flexGrow: "1.5",
              display: { xs: show, md: "block" },
               minHeight:"40vw",bgcolor:"myColor.main"
            }}
          >
            <MyList {...{ mode, setMode, setShow }} />
          </Box>

          <Box sx={{ flexGrow: "3" }}>
            <Outlet />
          </Box>

          <Box sx={{ flexGrow: "2.5", display: { xs: "none", xl: "block" } }}>
            <Status />
          </Box>
          <ModalButton handlePostUpdate={handlePostUpdate} />
        </Stack>
      </ThemeProvider>
    </PostsContext.Provider>
  );
};

export default Root;
