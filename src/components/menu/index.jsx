
import { useEffect, useMemo, useState } from "react";
import AvatarImg from "../../assets/bighead.svg"
import { Link, useLocation } from "react-router-dom";
import io from "socket.io-client";
import api from "../../services/api";
import { ImNotification } from "react-icons/im";
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
  IconNotification,
  Content,
  NotificationContainer,
  NotificationContent,
  ModalNotification,
  Notification,
  TitleModalNotification,
  AvatarArea,
  SocialMediaContainer,
  IconInstagram,
  IconYoutube,
  IconTiktok,
  IconFacebook
} from "./styles";

// const notificationMessages = [];

// const socket = io(import.meta.env.VITE_BASE_URL_SOCKET);

// socket.on("notification_friendship", (message) => {
//   console.log(message);
// });

// socket.on("notification_exercice", (message) => {
//   console.log(message);
// });

// socket.on("notification_topic", (message) => {
//   console.log(message);
// });

const MenuComponent = ({ children }) => {
  const [avatar, setAvatar] = useState();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notification, setNotification] = useState([]);

  const session = JSON.parse(localStorage.getItem("startdev-labs"));
  const userId = session?.id;

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
    if(document.querySelector("#avatar-temp-profile")) {
      document.querySelector("#avatar-temp-profile").style.display = "flex";
    }
  }, 800)

  return (
    <>
      <Header>
      <SocialMediaContainer>
              <a href="https://www.youtube.com/@startdevjs" target="_blank">
                <IconYoutube/>
              </a>
              <a href="https://www.instagram.com/startdevjs/" target="_blank">
                <IconInstagram/>
              </a>
              <a href="https://www.tiktok.com/@startdevjs?is_from_webapp=1&sender_device=pc" target="_blank">
                <IconTiktok/>
              </a>
              <a href="https://www.facebook.com/startdevjs" target="_blank">
                <IconFacebook/>
              </a>
            </SocialMediaContainer>
        <NotificationContainer>
          <div
            className="tile m-0 mr-3 level"
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <NotificationContent className="tile__icon">
              <IconNotification />
              <span>{notification?.length}</span>
            </NotificationContent>
          </div>
          {/* 
          <RiArrowUpSFill
            style={{
              top: "43.3px",
              right: "235px",
              position: "absolute",
              fontSize: "4.5rem",
              color: "#1d1933",
            }}
          /> */}

          {notificationOpen && (
            <ModalNotification>
              <TitleModalNotification>
                <h2>Notificações</h2>
              </TitleModalNotification>

              {notification?.map((item) => (
                <Notification>
                  <ImNotification />
                  <span>{item?.message}</span>
                </Notification>
              ))}

              {/* <Notification>
                <ImNotification />
                <span>Notificação 2</span>
              </Notification>

              <Notification>
                <ImNotification />
                <span>Notificação 3</span>
              </Notification> */}
            </ModalNotification>
          )}
        </NotificationContainer>
            
  
            <AvatarArea className="tile m-0 level">
            <div className="tile__icon">
            {
                    avatar ? (
                      <img 
                      className="avatar avatar--md" 
                      id="avatar-header"
                      src={avatar}
                      style={{backgroundColor: "transparent"}}
                      />
                    ) : (
                      <img 
                      className="avatar avatar--md" 
                      id="avatar-temp-profile"
                      src={AvatarImg}
                      style={{backgroundColor: "transparent", display: "none"}}
                      />
                    )
                  }
            </div>
            <div className="tile__container">
              <p className="tile__title m-0" style={{ color: "#dcdcdc" }} id="name-header">
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
          <Option active={location.pathname === "/" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Início">
              <IconHome />
            </div>
          </Option>
        </Link>

        <Link to="/projects?video=true">
          <Option active={location.pathname === "/projects" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Projetos">
              <IconProjects />
            </div>
          </Option>
        </Link>

        <Option>
          <div className="tooltip tooltip--right" data-tooltip="Comunidade">
            <IconCommunity />
          </div>
        </Option>
        <Link to="/profile">
          <Option active={location.pathname === "/profile" ? "true" : "false"}>
            <div className="tooltip tooltip--right" data-tooltip="Minha Conta">
              <IconMyAccount />
            </div>
          </Option>
        </Link>
        {session?.admin && (
          <Link to="/admin">
            <Option active={location.pathname === "/admin" ? "true" : "false"}>
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
