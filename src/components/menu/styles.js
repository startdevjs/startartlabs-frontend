import styled from "styled-components";
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RxExit } from "react-icons/rx";

export const Header = styled.div`
  background-color: #131129;
  position: fixed;
  top: 0;
  left: 81px;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;
`;

export const Menu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background-color: #1d1933;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Option = styled.div`
  color: #7e7e7e;
  padding-top: 40px;
  cursor: pointer;

  &:hover {
    color: #2a7ae9;
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

export const Content = styled.div`
  margin: 90px 20px 0 100px;
  color: #dcdcdc !important;
`;
