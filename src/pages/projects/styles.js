import styled from "styled-components";
import { BiCodeAlt, BiPlayCircle } from "react-icons/bi";

export const ProjectContainer = styled.div`
  width: 100%;

  margin-top: 5em;
`;

export const ProjectContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 4%;
  margin-top: 2em;

  @media (max-width: 970px) {
    justify-content: center;
  }

  @media (min-width: 1400px) {
    gap: 2.6%;
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 20px !important;
  /* margin-left: 22px !important; */
  margin-left: 4px !important;

  @media (min-width: 1150px) {
    font-size: 2rem !important;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (min-width: 1150px) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const ProjectVideoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  @media (min-width: 1150px) {
    width: 70%;
  }
`;

export const ProjectVideo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1d1933;
  border-radius: 18px;

  padding: 20px 0;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1150px) {
    min-height: 500px;
  }
`;

export const ProjectVideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 18px;

  @media (min-width: 1150px) {
    width: 90%;
    height: 90%;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem !important;
  font-weight: 400 !important;
  margin-bottom: 30px;
  margin-top: 30px;

  margin-left: 4px !important;

  text-align: justify !important;
  line-height: 2.4 !important;

  color: #dadada !important;

  @media (min-width: 1150px) {
    font-size: 1.2rem !important;
  }
`;

export const ProjectSideBarList = styled.div`
  width: 100%;
  height: auto;
  /* padding: 20px; */

  background-color: #1d1933;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1150px) {
    width: 30%;
    min-height: 500px;
  }
`;

export const ProjectSideBarListContent = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectSideBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  width: 100%;

  padding: 30px;
  padding-bottom: 10px;

  border-bottom: 3px solid #2a2648;
`;

export const ProjectSideBarHeaderTitle = styled.h2`
  font-size: 1.15rem !important;
  font-weight: 500 !important;

  a {
    color: ${(props) => (props.active ? "#2a7ae9" : "#fff")} !important;

    &:hover {
      color: #2a7ae9 !important;
    }
  }
`;

export const ProjectSideBarListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  border-radius: 15px;

  background-color: #2a2648;
  padding: 20px;

  cursor: pointer;

  &:hover {
    color: #2a7ae9 !important;
  }
`;

export const ProjectSideBarListItemTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 0;

  p {
    font-size: 1rem !important;
    font-weight: 500;

    margin: 0;

    @media (min-width: 1150px) {
      font-size: 1.2rem;
    }
  }

  transition: color 0.2s;

  &:hover {
    color: #2a7ae9 !important;
  }
`;

export const IconPlay = styled(BiPlayCircle)`
  font-size: 1.8rem !important;
`;

export const IconChallenge = styled(BiCodeAlt)`
  font-size: 1.8rem !important;
`;

export const ProjectImg = styled.img`
  border-radius: 18px;
`;

export const ProjectFooter = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
`;

export const SendProjectFooter = styled.div`
  width: 100%;

  margin-top: 60px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonSendProjectContainer = styled.div`
  width: 30%;

  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ButtonSendProject = styled.button`
  padding: 0.4em;
  margin-top: 10px;

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;
  color: #1d1933;

  cursor: pointer;

  background-color: #2a7ae9;
  transition: background-color 0.2s;

  color: #fff;

  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
`;

export const ContainerEmpty = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleEmpty = styled.h1`
  font-size: 1rem !important;
  font-weight: 500 !important;
  margin-bottom: 30px;
  margin-top: 30px;

  margin-left: 4px !important;

  text-align: center !important;
  line-height: 2.4 !important;

  color: #dadada !important;

  @media (min-width: 1150px) {
    font-size: 1rem !important;
  }
`;

export const DescriptionEmpty = styled.p`
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

export const ButtonEmpty = styled.button`
  padding: 0.4em;
  margin-top: 10px;
  padding: 1.2rem;

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  background-color: #2a7ae9;
  color: #fff;

  a {
    color: #dadada !important;
  }

  transition: background-color 0.2s;

  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }

  @media (min-width: 1150px) {
    width: 30%;
  }
`;
