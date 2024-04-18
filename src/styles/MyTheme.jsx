import { grey, orange } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          bluee: {
            main: "#1E90FF",
            light: "#87CEFA",
            dark: "#00BFFF",
          },
          myColor: {
            main: grey[100],
          },
        }
      : {
          // palette values for dark mode
          bluee: {
            main: orange[500],
            light: orange[300],
            dark: orange[700],
          },
          myColor: {
            main: "black",
          },
        }),
  },
});

export default getDesignTokens;