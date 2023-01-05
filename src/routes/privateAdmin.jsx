import { Navigate } from "react-router-dom";
import { Menu, AdminMenu } from "../components";

const PrivateAdmin = ({ Component }) => {
  const session = JSON.parse(localStorage.getItem("startdev-labs"));

  return session?.logged ? (
    <Menu>
      <AdminMenu>
        <Component />
      </AdminMenu>
    </Menu>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateAdmin;
