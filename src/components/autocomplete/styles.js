import styled from "styled-components";

export const Container = styled.div`
  input {
    border: none !important;

    &:focus {
      border: none !important;
    }

    &:hover {
      border: none !important;
    }

    &:active {
      border: none !important;
    }
  }
`;

export const OptionAutoCompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

export const OptionAutoComplete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;

  background-color: #000;
  color: #fff !important;

  &:hover {
    background-color: #333;
  }

  span {
    color: #fff !important;

    &:hover {
      color: #fff !important;
    }
  }
`;
