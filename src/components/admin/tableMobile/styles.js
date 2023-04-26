import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme: { colors } }) => colors.primaryColor};

  border-radius: 10px;

  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 10px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeader = styled.div`
  display: flex;
  f
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */

  align-items: flex-start;

  width: 100%;

  gap: 1em;

  margin-bottom: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TitleCardHeader = styled.h1`
  font-size: 18px;
  color: #d4d4d4;
  font-weight: 500;

  width: 40%;
`;

export const CardBodyText = styled.p`
  font-size: 16px;
  color: #d4d4d4;
  font-weight: 400;
`;

export const CardFooter = styled.div`
  w

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
`;

export const ContainerButtons = styled.div`
  margin-top: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  max-width: 100px;

  padding: 0.5em;

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;
`;

export const ButtonEdit = styled(Button)`
  background-color: #ffcc00;
  color: ${({ theme: { colors } }) => colors.primaryColor};

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonCorrection = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.secondaryColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonView = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.tertiaryColor};
  color: ${({ theme: { colors } }) => colors.primaryColor};

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;


export const ButtonDelete = styled(Button)`
  background-color: #ff4d4d;
  color: ${({ theme: { colors } }) => colors.primaryColor};

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const Corrected = styled.div`
  background-color: ${(props) => props.background};
  color: ${({ theme: { colors } }) => colors.primaryColor};

  border-radius: 5px;
  padding: 0.5em;

  display: flex;
  justify-content: center;
  align-items: center;
`;
