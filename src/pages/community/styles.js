import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const CommunityContainer = styled.div`
  width: 100%;
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommunityTitle = styled.h1`
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 20px !important;
  margin-left: 4px !important;
  @media (min-width: 1150px) {
    font-size: 2rem !important;
  }
`;
export const Header = styled.div`
  background-color: #2a2648;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding: 1em;
  > span {
    font-size: 1.3rem;
  }
  @media (max-width: 1440px) {
    width: 63%;
    > span {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 1rem;

  padding-bottom: 2rem;
`;

export const ForumHeaderContainer = styled.div`
  width: 100%;
  /* height: 200px; */
  padding: 2rem;

  display: flex;
  justify-content: ${({ post }) => (post ? "space-between" : "flex-start")};
  align-items: center;
  gap: 2rem;

  background: linear-gradient(90deg, rgba(42, 122, 233, 1) 0%, rgba(119, 80, 240, 1) 100%);

  border-radius: 1rem;
  margin-bottom: 6rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ForumHeaderImgContainer = styled.div`
  width: 200px;
`;

export const ForumHeaderContent = styled.div``;

export const ForumHeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;

  margin-bottom: 0.5rem;
`;

export const ForumHeaderSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #d4d4d4;
`;

export const W50 = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const W50End = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1100px) {
    width: 100%;

    justify-content: center;
  }
`;

export const ForumHeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ButtonCreateTopic = styled.button`
  width: 200px;
  padding: 1rem 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 0.5rem;

  font-size: 1rem;
  font-weight: 700;
  color: #fff;

  cursor: pointer;

  transition: 0.4s;

  &:hover {
    color: #0f172a;
    border: 2px solid #0f172a;
  }
`;

export const TopicCard = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const CardHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background-color: #21283b;

  border-top-left-radius: ${(props) => props.borderTop};
  border-top-right-radius: ${(props) => props.borderTop};
`;

export const CardHeaderDate = styled.div`
  color: #9aa4bf;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ContainerButtons = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;

  a {
    cursor: pointer;

    &:first-child {
      color: #9aa4bf;
    }

    &:last-child {
      color: #fff;
    }
  }
`;

export const CardContent = styled.div`
  width: 70%;

  width: 100%;
  padding: 3rem;

  display: flex;
  /* align-items: center; */
  gap: 2rem;

  background-color: #1d2333;

  border-bottom-left-radius: ${(props) => props.borderBottom};
  border-bottom-right-radius: ${(props) => props.borderBottom};

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AvatarArea = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 880px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  filter: drop-shadow(0 3px 0 rgba(0, 0, 0, 0.1));

  margin-top: 1rem;
`;

export const AvatarImgContainer = styled.div`
  -webkit-clip-path: url(#svgPath);
  clip-path: url(#svgPath);
  position: relative;

  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTEwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTEwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOTMuMDEzOTcyMSwyMi42IEw1Ni42ODY2MjY3LDEuOCBDNTQuNTkwODE4NCwwLjYgNTIuMTk1NjA4OCwwIDQ5LjkwMDE5OTYsMCBDNDcuNjA0NzkwNCwwIDQ1LjIwOTU4MDgsMC42IDQzLjExMzc3MjUsMS44IEw2Ljc4NjQyNzE1LDIyLjYgQzIuNTk0ODEwMzgsMjUgMCwyOS40IDAsMzQuMiBMMCw3NS44IEMwLDgwLjYgMi41OTQ4MTAzOCw4NSA2Ljc4NjQyNzE1LDg3LjQgTDQzLjIxMzU3MjksMTA4LjIgQzQ1LjMwOTM4MTIsMTA5LjQgNDcuNjA0NzkwNCwxMTAgNTAsMTEwIEM1Mi4yOTU0MDkyLDExMCA1NC42OTA2MTg4LDEwOS40IDU2Ljc4NjQyNzEsMTA4LjIgTDkzLjIxMzU3MjksODcuNCBDOTcuNDA1MTg5Niw4NSAxMDAsODAuNiAxMDAsNzUuOCBMMTAwLDM0LjIgQzk5LjgwMDM5OTIsMjkuNCA5Ny4yMDU1ODg4LDI1IDkzLjAxMzk3MjEsMjIuNiBMOTMuMDEzOTcyMSwyMi42IFoiPjwvcGF0aD48L2c+PC9zdmc+")
      center center no-repeat;
    background-size: 100px 109px;
  }

  img {
    display: block;
    width: 110px;
    height: 110px;
    margin-left: 0;
  }
`;

export const Author = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 880px) {
    justify-content: center;
    align-items: center;

    text-align: center;
  }
`;

export const AuthorName = styled.div`
  color: #fff;
  font-weight: 700;
`;

export const AuthorUsername = styled.div`
  color: #9aa4bf;
  font-weight: 500;

  &:hover {
    color: #2a7ae9;
    font-weight: 600;
  }
`;

export const AuthorShield = styled.div`
  height: 20px;
  margin-top: 12px;
  padding: 0 8px;
  border-radius: 200px;
  background-color: ${({ bgColor }) => bgColor};
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
`;

export const CardTextContent = styled.div`
  padding-top: 2rem;
`;

export const CommunityTopicContent = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => (props.par === true ? "#1d2333" : "#21283b")};

  border-top-left-radius: ${(props) => props.borderTop};
  border-top-right-radius: ${(props) => props.borderTop};
  border-bottom-left-radius: ${(props) => props.borderBottom};
  border-bottom-right-radius: ${(props) => props.borderBottom};

  @media (max-width: 880px) {
    flex-direction: column;
    justify-content: center;

    text-align: center;

    gap: 2rem;
  }
`;

export const TitleCommunityTopicContainer = styled.div`
  width: 40%;

  > p {
    color: #9aa4bf !important;
    font-weight: 400;
  }

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const TitleCommunityTopic = styled.div`
  color: #fff;
  font-weight: 700;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #2a7ae9;
  }
`;

export const TitleCommunityTopicStatic = styled.div`
  width: 40%;

  color: #fff;
  font-weight: 700;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const NumberReplies = styled.div`
  width: 20%;
  color: #fff;
  font-weight: 700;

  text-align: center;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const AvatarCommunityTopic = styled.div`
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const AvatarCommunityTopicStatic = styled.div`
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: #fff;
  font-weight: 700;

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const ButtonGoBackContainer = styled.div`
  width: 200px;

  margin-bottom: 1rem;
`;

export const ButtonGoBack = styled.button`
  width: 100%;

  padding: 0.5rem;

  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: transparent;
  color: #2a7ae9;
  font-weight: 700;
  font-size: 1rem;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;

  border: 1px solid #2a7ae9;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #2a7ae9;
    color: #fff;
  }
`;

export const ButtonCreate = styled.button`
  max-width: 25%;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1em;
  margin-right: 1em;
  background-color: #3f9e3f;
  outline: none;
  border: none;
  color: #fff;
  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
  @media (max-width: 1440px) {
    max-width: 35%;
  }
  @media (max-width: 500px) {
    max-width: 55%;
  }
`;

export const IconPlus = styled(AiOutlinePlus)`
  margin-right: 1em;
`;
