import React from "react";
import { ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import apiWhiteLabel from "../../services/apiWhiteLabel";

const whiteLabel = JSON.parse(localStorage.getItem("whiteLabel"));

const domain = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
const res = await apiWhiteLabel.post("/whiteLabel/domain", {
  domain,
});
const whiteLabelRes = res?.data;

const theme = {
  colors: {
    background: whiteLabel?.background || whiteLabelRes?.background,

    primaryColor: whiteLabel?.primaryColor || whiteLabelRes?.primaryColor,
    primaryColorDark: darken(0.003, whiteLabel?.primaryColor || whiteLabelRes?.primaryColor),
    primaryColorLight: lighten(0.04, whiteLabel?.primaryColor || whiteLabelRes?.primaryColor),

    secondaryColor: whiteLabel?.secondaryColor || whiteLabelRes?.secondaryColor,
    tertiaryColor: whiteLabel?.tertiaryColor || whiteLabelRes?.tertiaryColor,
  },
  domain: whiteLabel?.domain || whiteLabelRes?.domain,
  payment: whiteLabel?.payment || whiteLabelRes?.payment,
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
