import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

export const CommunityContainer = styled.div`
  width: 100%;
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommunityTitle = styled.h1`
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 20px !important;
  margin-left: 4px !important;
  @media (min-width: 1150px) {
    font-size: 2rem !important;
  }
`;
export const Header = styled.div`
  background-color: #2a2648;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  padding: 1em;
  > span {
    font-size: 1.3rem;
  }
  @media (max-width: 1440px) {
    width: 63%;
    > span {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ButtonCreate = styled.button`
  max-width: 25%;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 1em;
  margin-right: 1em;
  background-color: #3f9e3f;
  outline: none;
  border: none;
  color: #fff;
  &:hover {
    filter: brightness(0.8);
    color: #fff;
  }
  @media (max-width: 1440px) {
    max-width: 35%;
  }
  @media (max-width: 500px) {
    max-width: 55%;
  }
`;
export const IconPlus = styled(AiOutlinePlus)`
  margin-right: 1em;
`;
