import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  gap: 1rem;
  padding: 0 15px;

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 30px 15px;
`;

export const ContainerCheckoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;
