import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  height: 100%;

  padding: 0 20px;
  margin-bottom: 4rem;
  margin-top: 2rem;

  background: #1d1933;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;

  margin-bottom: 20px;
  padding: 30px 20px;

  color: #4493cf;

  /* &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #4493cf;
    margin-top: 20px;
  } */
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;

  padding: 0 20px;
  margin-top: 1rem;
  border-radius: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 20px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #fff;
    margin-top: 10px;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
