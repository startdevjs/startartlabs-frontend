import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 600px;

  background: #1d1933;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 20px rgb(89 102 122 / 5%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 3em;

  @media (min-width: 780px) {
    width: 48%;
  }

  @media (min-width: 1400px) {
    width: 23%;
    min-height: 500px;
  }

  /* @media (max-width: 1200px) {
    width: 45%;
  }

  @media (max-width: 880px) {
    width: 100%;
  } */
`;

export const ProjectCardInfo = styled.div`
  width: 100%;
`;

export const ProjectCardTitle = styled.h1`
  font-size: 18px;
  color: #fff;
  font-weight: 600;
  line-height: 1.6;
`;

export const ProjectCardDescription = styled.p``;

export const Button = styled.button`
  padding: 0.8em;

  border: none;
  border-radius: 12px;

  font-size: 13px;
  font-weight: bold;
  color: hsla(0, 0%, 100%, 0.7);

  cursor: pointer;
`;

export const ProjectCardButton = styled(Button)`
  background-color: #6f4ef2;
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

export const ProjectCardImage = styled.div`
  border-radius: 16px;
  margin-bottom: 1rem;

  /* background-image: url(/assets/img/warning.png) !important; */
  background-image: url(${(props) => props.image}) !important;
  background-size: cover !important;
  background-position: 50% !important;

  max-width: 100%;
  width: 100%;
  min-height: 250px;
  height: auto;

  @media (min-width: 1400px) {
    min-height: 200px;
  }
`;