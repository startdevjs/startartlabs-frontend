import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2em;
`;

export const WarningContainer = styled.div`
  width: 60%;

  padding: 2em;

  border-radius: 18px;
  margin-bottom: 30px;

  box-shadow: 0 0 20px rgb(89 102 122 / 5%);

  background-image: url(/assets/img/warning.png) !important;
  background-size: cover !important;
  background-position: 50% !important;

  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 968px) {
    width: 100%;
  }
`;

export const WarningOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  border-radius: 16px;

  background: ${({ background }) => background};
  opacity: 0.4;

  z-index: 2;
`;

export const WarningContainerInfo = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
`;

export const WarningTitle = styled.h1`
  width: 60%;

  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.6;
  font-size: 26px;

  @media (max-width: 860px) {
    width: 80%;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const WarningDescription = styled.p`
  color: hsla(0, 0%, 100%, 0.7);
  margin-bottom: 30px;
`;

export const WarningContainerButton = styled.div`
  width: 20%;

  @media (max-width: 1260px) {
    width: 30%;
  }

  @media (max-width: 860px) {
    width: 50%;
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 0.8em;

  border: none;
  border-radius: 12px;

  font-size: 13px;
  font-weight: bold;
  color: hsla(0, 0%, 100%, 0.7);

  cursor: pointer;
`;

export const WarningButton = styled(Button)`
  background-color: #f73164;
  transition: background-color 0.2s;

  a {
    color: #fff;
  }

  &:hover {
    filter: brightness(0.8);
    color: #fff;

    a {
      color: #fff;
    }
  }
`;

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
  font-size: 2rem;
  font-weight: 600;
`;
