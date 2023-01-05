import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & button {
    width: 40px;
    height: 40px;
    border: 0;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dddddd;
  color: var(--bs-blue-dark);
  border-radius: 0.6rem !important;
  > button {
    margin-bottom: 0px !important;
    height: 100%;
  }
`;
export const ButtonIcon = styled.button`
  width: 50px !important;
  margin: auto 0.8rem;
  background: #969ba0 !important;
  color: var(--bs-white) !important;
  border-radius: 0.4rem !important;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
