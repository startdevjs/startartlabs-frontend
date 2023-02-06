import "cirrus-ui/dist/cirrus-all.min.css";
import { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darken, lighten } from "polished";
import { Loading } from "./components";
import Routes from "./routes";

import apiWhiteLabel from "./services/apiWhiteLabel";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const [loading, setLoading] = useState(true);

  const domain = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  useMemo(async () => {
    try {
      const res = await apiWhiteLabel.post("/whiteLabel/domain", {
        domain,
      });

      localStorage.setItem("whiteLabel", JSON.stringify(res?.data));

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const whiteLabel = JSON.parse(localStorage.getItem("whiteLabel"));

  let theme = null;
  if (!loading) {
    theme = {
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
  }

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
