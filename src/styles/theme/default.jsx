import React from "react";
import { ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";

const whiteLabel = JSON.parse(localStorage.getItem("whiteLabel"));
const theme = {
  colors: {
    background: whiteLabel?.background,

    primaryColor: whiteLabel?.primaryColor,
    primaryColorDark: darken(0.003, whiteLabel?.primaryColor),
    primaryColorLight: lighten(0.04, whiteLabel?.primaryColor),

    secondaryColor: whiteLabel?.secondaryColor,
    tertiaryColor: whiteLabel?.tertiaryColor,
  },
  domain: whiteLabel?.domain,
  payment: whiteLabel?.payment,
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
