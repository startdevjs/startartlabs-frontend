import "cirrus-ui/dist/cirrus-all.min.css";
import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import apiWhiteLabel from "./services/apiWhiteLabel";
import { GlobalStyle } from "./styles/global";
import Theme from "./styles/theme/default";

const App = () => {
  const domain = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  useMemo(async () => {
    const res = await apiWhiteLabel.post("/whiteLabel/domain", {
      domain,
    });

    localStorage.setItem("whiteLabel", JSON.stringify(res?.data));
  }, []);

  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Routes />
      </Theme>
    </BrowserRouter>
  );
};

export default App;
