import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-height: 310px !important;
  overflow-y: auto;
  padding: 1rem;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #131129;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7e7e7e;
    border-radius: 20px;
    border: 3px solid #7e7e7e;
  }
`;
export const Card = styled.div`
  width: 100%;
  border-radius: 12px;
  background-color: #131129;
  height: 70px;
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
  margin-bottom: 1em;
`;
export const Button = styled.button`
  border-radius: 5px;
  padding: 0.1em;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  max-width: 30%;
  margin: 0 1em 0 3em;
  transition: filter 0.2s;
  color: #fff;
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
`;
