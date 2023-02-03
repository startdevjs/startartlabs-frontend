import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 4rem;
  > div {
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  > span {
    font-size: 1.3rem;
  }
  > h1 {
    font-size: 2.6rem;
  }
  @media (max-width: 1440px) {
    padding-top: 2rem;
  }
  @media (max-width: 500px) {
    padding-top: 0;
    > div {
      width: 220px;
      margin-bottom: 1rem;
    }
    > h1 {
      font-size: 1.3rem;
    }
    > span {
      font-size: 1.1rem;
    }
  }
`;
