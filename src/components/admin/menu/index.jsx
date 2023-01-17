import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Option,
  IconProjects,
  IconMyAccount,
  IconWarning,
  IconLession,
  IconExercise,
  Content,
} from "./styles";

const AdminMenuComponent = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Menu>
        <Link to="/admin">
          <Option active={location.pathname === "/admin" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Usuário">
              <IconMyAccount /> Usuário
            </div>
          </Option>
        </Link>
        <Link to="/admin/project">
          <Option active={location.pathname === "/admin/project" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Projetos">
              <IconProjects /> Projetos
            </div>
          </Option>
        </Link>
        <Link to="/admin/exercise">
          <Option active={location.pathname === "/admin/exercise" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Atividades">
              <IconExercise /> Exercícios
            </div>
          </Option>
        </Link>
        <Link to="/admin/lession">
          <Option active={location.pathname === "/admin/lession" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Aulas">
              <IconLession /> Aulas
            </div>
          </Option>
        </Link>
        <Link to="/admin/warning">
          <Option active={location.pathname === "/admin/warning" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Avisos">
              <IconWarning /> Avisos
            </div>
          </Option>
        </Link>
        <Link to="/admin/forum">
          <Option active={location.pathname === "/admin/forum" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Admin Forum">
              <IconWarning /> Forum
            </div>
          </Option>
        </Link>
      </Menu>
      <Content>{children}</Content>
    </>
  );
};

export default AdminMenuComponent;
