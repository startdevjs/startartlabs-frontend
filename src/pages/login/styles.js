import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  background-color: #1d1933;
  width: 500px;
  border-radius: 3px;
  border: 1px solid #03357b;
  padding: 30px 15px;
`;

export const LogoContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 90%;
`;

export const Password = styled.p`
  color: #a9a9a9 !important;
  text-align: right;
  cursor: pointer;
  margin-bottom: 40px;
`;

export const Account = styled.p`
  text-align: center;
  color: #a9a9a9;
  font-weight: bold;
  cursor: pointer;
`;
