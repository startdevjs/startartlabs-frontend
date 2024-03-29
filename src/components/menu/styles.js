import styled from "styled-components";
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { MdOutlineAdminPanelSettings, MdOutlineNotificationsNone } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaTiktok } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

export const Header = styled.div`
  background: ${({ theme: { colors } }) => colors.primaryColorDark};
  position: fixed;
  top: 0;
  left: 10px;
  right: 0;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  z-index: 999;

  @media (min-width: 560px) {
    justify-content: flex-end;
    left: 81px;
  }
`;

export const Logo = styled.img`
  width: ${({ theme: { payment } }) => (payment ? "30px" : "20px")};
`;

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;
  width: 80px;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 999;

  @media (min-width: 560px) {
    top: 0;
  }
`;

export const Option = styled.div`
  color: ${({ active }) =>
    active === "true" ? ({ theme: { colors } }) => colors.secondaryColor : "#7e7e7e"};

  padding-top: 40px;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.secondaryColor};
  }
`;

const ICON = `
  color: inherit;
  font-size: 24px;
`;

export const IconHome = styled(AiOutlineHome)`
  ${ICON}
`;

export const IconProjects = styled(BsCodeSlash)`
  ${ICON}
`;

export const IconCommunity = styled(AiOutlineComment)`
  ${ICON}
`;

export const IconMyAccount = styled(BsPerson)`
  ${ICON}
`;

export const IconAdmin = styled(MdOutlineAdminPanelSettings)`
  ${ICON}
`;

export const IconExit = styled(RxExit)`
  ${ICON}
`;

export const IconNotification = styled(MdOutlineNotificationsNone)`
  font-size: 30px;
  color: #fff !important;
`;

export const IconMenu = styled(BiMenu)`
  font-size: 30px;
  color: #fff !important;

  @media (min-width: 560px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin: 90px 20px 0 20px;
  color: #dcdcdc !important;

  @media (min-width: 560px) {
    margin: 90px 20px 0 100px;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  > span {
    margin-top: 20px;
    margin-left: -10px;
    color: #fff;

    width: 20px;
    height: 20px;

    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme: { colors } }) => colors.secondaryColor};
    border-radius: 50%;
  }
`;

export const NotificationContainer = styled.div`
  color: #fff;
`;

export const ModalNotification = styled.div`
  position: absolute;
  z-index: 9999999;

  overflow-y: auto;

  top: 70px;
  right: 250px;

  width: 350px;
  height: 400px;

  border-radius: 10px;
  /* padding: 10px 5px; */

  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  box-shadow: 0 0 10px ${({ theme: { colors } }) => colors.primaryColorDark};

  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
`;

export const TitleModalNotification = styled.div`
  /* padding: 1rem; */

  border-bottom: 8px solid ${({ theme: { colors } }) => colors.primaryColorDark};

  > h2 {
    font-size: 18px;

    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-left: 18px;
  }
`;

export const Notification = styled.div`
  width: 100%;
  padding: 1rem;

  cursor: pointer;

  /* background-color: #131129; */
  /* border-radius: 10px; */
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.primaryColorDark};

  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 20px;
    /* color: ${({ theme: { colors } }) => colors.tertiaryColor}; */
  }
`;

export const AvatarArea = styled.div`
  background-color: transparent !important;
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  margin-right: 1.5rem;

  @media (max-width: 560px) {
    display: none;
  }
`;

export const IconInstagram = styled(BsInstagram)`
  color: #fff;
  font-size: 1.3em;
`;
export const IconYoutube = styled(BsYoutube)`
  color: #fff;
  font-size: 1.3em;
`;
export const IconTiktok = styled(FaTiktok)`
  color: #fff;
  font-size: 1.3em;
`;
export const IconFacebook = styled(AiFillFacebook)`
  color: #fff;
  font-size: 1.3em;
`;
export const IconDiscord = styled(FaDiscord)`
  color: #fff;
  font-size: 1.3em;
`
