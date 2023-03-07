import styled from "styled-components";
import { GiConfirmed } from "react-icons/gi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  margin-bottom: auto;
  background: #1d1933;
  border-radius: 10px;
  max-width: 30%;
  @media (min-width: 768px) {
    width: 38%;
    max-width: 38%;
  }
  @media (max-width: 500px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
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
export const IconConfirmed = styled(GiConfirmed)`
  font-size: 3rem;
  color: #3f9e3f;
`;
export const ConfirmedContainer = styled.div`
  flex-direction: row;
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  padding: 30px 20px;
  color: #4493cf;
  > span {
    @media (max-width: 500px) {
      font-size: 1.1rem;
    }
  }
`;
