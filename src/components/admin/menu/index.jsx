import { Link } from "react-router-dom";
import {
  Menu,
  Option,
  IconHome,
  IconProjects,
  IconCommunity,
  IconMyAccount,
  IconAdmin,
  IconExit,
  Content,
} from "./styles";

const AdminMenuComponent = ({ children }) => {
  const session = JSON.parse(localStorage.getItem("startdev-labs"));
  console.log(session);

  return (
    <>
      <Menu>
        <Link to="/admin">
          <Option active={window.location.pathname === "/admin" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Início">
              <IconMyAccount /> Usuário
            </div>
          </Option>
        </Link>
      </Menu>
      <Content>{children}</Content>
    </>
  );
};

export default AdminMenuComponent;
