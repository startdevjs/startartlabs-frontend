import styled from "styled-components";
import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};

  border: 0;
  border-radius: 15px;

  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);

  width: 50%;
  height: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1080px) {
    width: 80%;
    height: 80%;
  }

  @media (max-width: 680px) {
    width: 90%;
    height: 90%;
  }
`;

export const ModalContent = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
    color: #d4d4d4;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 18px;
    }
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  gap: 2em;

  margin-top: 30px;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  padding: 0.5em;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  border: none;
  transition: filter 0.2s;

  &:focus {
    outline: none;
  }
`;

export const ButtonCancel = styled(Button)`
  background-color: #d4d4d4;

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

export const ButtonClose = styled.button`
  position: absolute;
  top: 0.5em;
  right: 0.5em;

  border: none;
  background-color: transparent;
  color: #d4d4d4;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  display: flex;
  justify-content: flex-end;
  margin-right: 0.5em;
`;
