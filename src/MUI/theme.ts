import { createTheme } from "@mui/material/styles";
const rootElement = document.getElementById("root");
const theme = createTheme({
  typography: {
    fontFamily: '"YekanBakh","Roboto","Arial"',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 700,
    fontWeightBold: 800,
  },
  direction: "rtl",
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});
export default theme;
