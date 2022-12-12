import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import "cirrus-ui/dist/cirrus-all.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
