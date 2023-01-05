import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AvatarImg from "../../assets/bighead.svg"
import api from "../../services/api";
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
  AvatarArea
} from "./styles";

const MenuComponent = ({ children }) => {
  const [avatar, setAvatar] = useState();
  const session = JSON.parse(localStorage.getItem("startdev-labs"));
  const userId = session?.id

  const handleAvatar = async (id) => {
    const { data } = await api.get(`/user/${id}`)
    if(data?.avatar){
      return `${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${data?.avatar}`
    } 
    return;
  }

  useEffect(() => {
    handleAvatar(userId)
    .then((response) => setAvatar(response))
  }, [userId]);

  setTimeout(() => {
    if(document) {
      document.querySelector("#avatar-temp").display = "flex";
    }
  }, 800)

  return (
    <>
      <Header>
            <AvatarArea className="tile m-0 level">
            <div className="tile__icon">
            {
                    avatar ? (
                      <img 
                      className="avatar avatar--md" 
                      src={avatar}
                      style={{backgroundColor: "transparent"}}
                      />
                    ) : (
                      <img 
                      className="avatar avatar--md" 
                      id="avatar-temp"
                      src={AvatarImg}
                      style={{backgroundColor: "transparent", display: "none"}}
                      />
                    )
                  }
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
          </AvatarArea>
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
        <Link to="/profile">
        <Option active={window.location.pathname === "/profile" ? "true" : "false"}>
          <div className="tooltip tooltip--right" data-tooltip="Minha Conta">
            <IconMyAccount />
          </div>
        </Option>
        </Link>
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
          <div
            className="tooltip tooltip--right"
            data-tooltip="Sair"
            onClick={() => {
              localStorage.removeItem("startdev-labs");
              window.location.href = "/";
            }}
          >
            <IconExit />
          </div>
        </Option>
      </Menu>
      <Content>{children}</Content>
    </>
  );
};

export default MenuComponent;
