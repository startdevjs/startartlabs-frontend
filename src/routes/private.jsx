import { Navigate } from "react-router-dom";
import { Menu } from "../components";

const Private = ({ Component }) => {
  const session = JSON.parse(localStorage.getItem("startdev-labs"));

  return session?.logged ? (
    <Menu>
      <Component />
    </Menu>
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
