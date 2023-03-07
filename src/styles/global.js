import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
  :root {
    font-family: "Poppins", sans-serif !important;
    font-size: 16px;
    line-height: 24px;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87) !important;
    background-color: ${({ theme: { colors } }) => colors.background} !important;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    --cirrus-focus-color: transparent;
  }

  body svg {
    background-color: transparent !important;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  input {
    background-color: #000 !important;
    border: 1px solid #373535 !important;
    color: #fff !important;
  }

  textarea {
    background-color: #000 !important;
    border: 1px solid #373535 !important;
    color: #fff !important;
  }

  select {
    background-color: #000 !important;
    border: 1px solid #373535 !important;
    color: #fff !important;
  }

  option {
    color: #fff !important;
  }

  button {
    width: 100% !important;
  }

  label {
    margin: 0 !important;
  }

`;
