import styled from "styled-components";
import ReactModal from "react-modal";

export const Modal = styled(ReactModal)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 2rem;
  background-color: #1d1933;
  border: 0;
  border-radius: 15px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  width: 45%;
  height: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1440px) {
    height: 85%;
  }
  @media (max-width: 1080px) {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 680px) {
    width: 100%;
    height: 100%;
  }
`;
export const ModalContent = styled.div`
  width: 100%;
  margin-bottom: auto;
  margin-top: 2em;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const Card = styled.div`
  width: 100%;
  border-radius: 12px;
  background-color: #131129;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 1em;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(171, 152, 171, 1);
  -moz-box-shadow: 0px 0px 5px 1px rgba(171, 152, 171, 1);
  box-shadow: 0px 0px 5px 1px rgba(171, 152, 171, 1);
  gap: 1em;
  margin-bottom: 1.5em;
  @media (max-width: 500px) {
    flex-direction: column;
    height: 150px;
  }
`;
export const Separator = styled.div`
  background-color: #7e7e7e;
  height: 2px;
  width: 350px;
  margin-top: 0.5em;
`;
export const CardsArea = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #131129;
  max-height: 50vh !important;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #131129;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7e7e7e;
    border-radius: 20px;
    border: 1px solid #7e7e7e;
  }
  @media (max-width: 500px) {
    max-height: 70vh !important;
  }
`;
export const Button = styled.button`
  border-radius: 5px;
  line-height: 1.5rem;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  max-width: 20%;
  margin: 0 1em 0 3em;
  transition: filter 0.2s;
  background-color: #f73164;
  color: #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
  @media (max-width: 500px) {
    width: 60%;
    max-width: 40%;
  }
`;
export const PaginationContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
