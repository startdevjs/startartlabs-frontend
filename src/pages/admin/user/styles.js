import styled from "styled-components";

export const ContainerButtons = styled.div`
  width: 30%;

  display: flex;
  align-items: center;

  margin-top: 50px;
  gap: 1em;
`;

export const Button = styled.button`
  padding: 0.4em;

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.primaryColor};

  cursor: pointer;
`;

export const ButtonGoBack = styled(Button)`
  background-color: #d4d4d4;
  transition: background-color 0.2s;

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonSubmit = styled(Button)`
  background-color: #3f9e3f;
  transition: background-color 0.2s;

  color: #fff;

  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
`;
