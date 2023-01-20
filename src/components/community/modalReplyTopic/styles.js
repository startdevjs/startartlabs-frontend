import styled from "styled-components";
import ReactModal from "react-modal";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
  width: 60%;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1440px) {
    height: 90%;
    width: 80%;
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
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  max-height: 80vh !important;
  overflow-y: auto;
  > form {
    width: 90%;
  }
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
  @media (max-width: 1440px) {
    max-height: 90vh !important;
    height: 500px;
  }
  @media (max-width: 500px) {
    max-height: 70vh !important;
    width: 100%;
  }
`;
export const Separator = styled.div`
  background-color: #7e7e7e;
  height: 2px;
  width: 450px;
  margin-top: 0.5em;
`;
export const CardsArea = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #131129;
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
export const RichText = styled(ReactQuill)`
  border-radius: 5px;
  margin-top: 2.5rem;
  margin-bottom: 5.2rem;
  color: #fff !important;
  height: 350px !important;
  width: 100% !important;
  background: #000 !important;

  /* .ql-snow .ql-tooltip {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .ql-snow .ql-tooltip a.ql-preview {
    padding-left: 5rem;
  }

  input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]):not([type="button"]):not(
      [type="reset"]
    ),
  select {
    width: 80%;
    border: 1px solid #dee2e6;
    border-radius: 3px;
    font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: var(--font-size-m);
    letter-spacing: 0.02rem;
    transition: 0.3s;
    outline: 0;
    padding: 0.85rem 1.1rem;

    margin-left: 8rem;
  } */

  .ql-snow .ql-stroke {
    stroke: #fff;
  }

  .ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 0px;
    white-space: nowrap;
  }

  .ql-container {
    border: none !important;
    height: 100% !important;
    background: #000 !important;
  }
  .ql-toolbar {
    display: flex !important;
    align-items: center !important;
    border: none !important;
    color: #fff !important;
    .ql-picker {
      .ql-picker-label {
        color: #fff !important;
      }
    }
  }

  .ql-formats {
    button {
      margin-top: 1rem !important;
    }
  }
  button {
    width: 10% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    svg {
      color: #fff !important;
    }
  }
`;
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
  gap: 1em;
`;

export const ButtonGoBack = styled.button`
  width: 150px !important;

  background-color: #d4d4d4;
  transition: background-color 0.2s;
  color: #1d1933;

  font-size: 12px;
  font-weight: 500;

  border: none;

  &:hover {
    filter: brightness(0.8);
    color: #1d1933;
  }
`;

export const ButtonSubmit = styled.button`
  width: 150px !important;

  background-color: #3f9e3f;
  transition: background-color 0.2s;
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  border: none;

  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
`;
