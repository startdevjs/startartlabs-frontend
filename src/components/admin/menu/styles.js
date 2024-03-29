import styled from "styled-components";
import { AiOutlineHome, AiOutlineComment, AiOutlineTags } from "react-icons/ai";
import { BsCodeSlash, BsPerson } from "react-icons/bs";
import { MdPlayLesson } from "react-icons/md";
import { RiFolderWarningLine } from "react-icons/ri";
import { BiCodeCurly } from "react-icons/bi";

export const Menu = styled.div`
  position: fixed;
  left: 80px;
  top: 0;
  bottom: 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-top: 20px;
  z-index: 9999;
`;

export const Option = styled.div`
  padding-top: 40px;
  cursor: pointer;

  color: ${({ active }) =>
    active === "true" ? "${({ theme: { colors } }) => colors.secondaryColor}" : "#7e7e7e"};

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

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

export const IconWarning = styled(RiFolderWarningLine)`
  ${ICON}
`;

export const IconTags = styled(AiOutlineTags)`
  ${ICON}
`;

export const IconLession = styled(MdPlayLesson)`
  ${ICON}
`;

export const IconExercise = styled(BiCodeCurly)`
  ${ICON}
`;

export const Content = styled.div`
  margin: 90px 20px 0 calc(100px + 120px);
  color: #dcdcdc !important;
`;
