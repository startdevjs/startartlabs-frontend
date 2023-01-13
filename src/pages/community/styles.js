import styled from "styled-components";

export const Message = styled.h1`
  font-size: 2rem !important;
  font-weight: 500 !important;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 4px !important;
  text-align: center !important;
  line-height: 1.4 !important;
  color: #dadada !important;
  @media (min-width: 1150px) {
    font-size: 4rem !important;
  }
`;
export const Description = styled.p`
  font-size: 1.4rem !important;
  font-weight: 400 !important;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 4px !important;
  text-align: center !important;
  line-height: 2.4 !important;
  @media (min-width: 1150px) {
    font-size: 1.4rem !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  margin-top: 8rem;
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
`;

export const AvatarArea = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 110px;
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
  /* background-color: #7750f8; */
  background-color: #2a7ae9;
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
`;

export const TitleCommunityTopicContainer = styled.div`
  width: 40%;

  > p {
    color: #9aa4bf;
    font-weight: 400;
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
`;

export const NumberReplies = styled.div`
  width: 20%;
  color: #fff;
  font-weight: 700;

  text-align: center;
`;

export const AvatarCommunityTopic = styled.div`
  width: 30%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
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
`;
