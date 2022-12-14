import styled from "styled-components";
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RxExit } from "react-icons/rx";

export const Menu = styled.div`
  position: fixed;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 150px;
  height: 100vh;
  background-color: #1d1933;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Option = styled.div`
  padding-top: 40px;
  cursor: pointer;

  color: ${({ active }) => (active === "true" ? "#2a7ae9" : "#7e7e7e")};

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

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
  margin: 90px 20px 0 calc(100px + 120px);
  color: #dcdcdc !important;
`;
