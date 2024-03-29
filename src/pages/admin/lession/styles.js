import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

export const ButtonCreateLessionContainer = styled.div`
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

export const ButtonCreateLession = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.tertiaryColor};
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

export const RichText = styled(ReactQuill)`
  border-radius: 5px;
  margin-top: 2.5rem;
  margin-bottom: 5.2rem;

  color: #fff !important;

  height: 500px !important;
  background: #000 !important;

  .ql-snow .ql-stroke {
    stroke: #fff;
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
