import { Link } from "react-router-dom";
import {
  Menu,
  Header,
  Option,
  IconHome,
  IconProjects,
  IconCommunity,
  IconMyAccount,
  IconAdmin,
  IconExit,
  Content,
} from "./styles";

const MenuComponent = ({ children }) => {
  const session = JSON.parse(localStorage.getItem("startdev-labs"));
  console.log(session);

  return (
    <>
      <Header>
        <div className="tile m-0 level">
          <div className="tile__icon">
            <figure
              className="avatar avatar--sm"
              data-text="RM"
              style={{ background: "rgb(163, 211, 156)" }}
            ></figure>
          </div>
          <div className="tile__container">
            <p className="tile__title m-0" style={{ color: "#dcdcdc" }}>
              {session?.name}
            </p>
            <p className="tile__subtitle m-0">
              <a href="!#" style={{ color: "#80adea" }}>
                @{session?.username}
              </a>
            </p>
          </div>
        </div>
      </Header>
      <Menu>
        <Link to="/">
          <Option>
            <div className="tooltip tooltip--right" data-tooltip="Início">
              <IconHome />
            </div>
          </Option>
        </Link>
        <Option>
          <div className="tooltip tooltip--right" data-tooltip="Projetos">
            <IconProjects />
          </div>
        </Option>
        <Option>
          <div className="tooltip tooltip--right" data-tooltip="Comunidade">
            <IconCommunity />
          </div>
        </Option>
        <Option>
          <div className="tooltip tooltip--right" data-tooltip="Minha Conta">
            <IconMyAccount />
          </div>
        </Option>
        {session?.admin && (
          <Link to="/admin">
            <Option active={window.location.pathname === "/admin" ? "true" : "false"}>
              <div className="tooltip tooltip--right" data-tooltip="Administração">
                <IconAdmin />
              </div>
            </Option>
          </Link>
        )}
        <Option>
          <div className="tooltip tooltip--right" data-tooltip="Sair">
            <IconExit />
          </div>
        </Option>
      </Menu>
      <Content>{children}</Content>
    </>
  );
};

export default MenuComponent;
