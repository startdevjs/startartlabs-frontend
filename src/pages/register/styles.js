import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  width: 900px;
  border-radius: 3px;
  border: 1px solid #03357b;
  padding: 30px 15px;
`;

export const Logo = styled.h1`
  color: #fff !important;
  text-align: center;
  font-size: 25px;
`;

export const Account = styled.p`
  text-align: center;
  color: #a9a9a9;
  font-weight: bold;
  cursor: pointer;
`;
