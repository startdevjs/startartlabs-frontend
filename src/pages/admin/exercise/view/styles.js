import styled from "styled-components";

export const Container = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  border-radius: 10px;
  padding: 2em;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #d4d4d4;

  margin-bottom: 1em;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 10px;
  padding: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */

  @media (max-width: 850px) {
    flex-direction: column; 
  }
`;

export const CardHeader = styled.div`
  display: flex;
  /* justify-content: space-between;
  flex-wrap: wrap; */
  flex-direction: column;

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

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 1em;
`;

export const CardBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const CardBodyTitle = styled.h1`
  font-size: 18px;
  color: #d4d4d4;
  font-weight: 500;
`;

export const CardBodyButton = styled.button`
  max-width: 100px;
  min-height: 45px;

  padding: 0.2em;

  border: none;

  border-radius: 5px;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2em;
  width: 100%;
`;

export const ContainerButtons = styled.div`
  display: flex;

  width: 100%;
  gap: 1em;
`;

export const Button = styled.button`
  max-width: 100px;
  min-height: 45px;

  padding: 0.2em;

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonCorrection = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.secondaryColor};

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonGoBack = styled(Button)`
  background-color: #d4d4d4;
  transition: background-color 0.2s;

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const Corrected = styled.div`
  background-color: ${(props) => props.background};
  color: ${({ theme: { colors } }) => colors.primaryColor};

  border-radius: 5px;
  padding: 0.2em;

  display: flex;
  justify-content: center;
  align-items: center;
`;
