import { Link } from "react-router-dom";
import {
  Menu,
  Option,
  IconProjects,
  IconMyAccount,
  IconWarning,
  IconLession,
  Content,
} from "./styles";

const AdminMenuComponent = ({ children }) => {
  const session = JSON.parse(localStorage.getItem("startdev-labs"));

  return (
    <>
      <Menu>
        <Link to="/admin">
          <Option active={window.location.pathname === "/admin" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Usuário">
              <IconMyAccount /> Usuário
            </div>
          </Option>
        </Link>
        <Link to="/admin/project">
          <Option active={window.location.pathname === "/admin/project" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Projetos">
              <IconProjects /> Projetos
            </div>
          </Option>
        </Link>
        <Link to="/admin/lession">
          <Option active={window.location.pathname === "/admin/lession" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Aulas">
              <IconLession /> Aulas
            </div>
          </Option>
        </Link>
        <Link to="/admin/warning">
          <Option active={window.location.pathname === "/admin/warning" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Aulas">
              <IconWarning /> Avisos
            </div>
          </Option>
        </Link>
      </Menu>
      <Content>{children}</Content>
    </>
  );
};

export default AdminMenuComponent;
