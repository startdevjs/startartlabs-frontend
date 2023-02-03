import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  gap: 6em;
  max-height: 80vh;
  margin-bottom: 2rem;
  @media (max-width: 1150px) {
    flex-direction: column;
    max-height: fit-content !important;
  }
`;
export const Body = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  min-width: 500px;
  width: 35%;
  min-height: 100%;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin: 1rem auto;
  @media (max-width: 468px) {
    min-width: 300px;
  }
`;
export const Logo = styled.h1`
  color: #fff !important;
  text-align: center;
  font-size: 25px;
  margin-bottom: 1.5em;
  @media (max-width: 1440px) {
    font-size: 20px;
  }
`;
export const AlterPassword = styled.p`
  color: #a9a9a9 !important;
  text-align: right;
  cursor: pointer;
`;
export const AlterPasswordModal = styled.div``;
export const ModalHeader = styled.div``;
export const ModalBody = styled.div``;
export const ModalFooter = styled.div``;
export const ModalContent = styled.div``;
export const AvatarArea = styled.div`
  background-color: transparent !important;
`;

export const Container = styled.div`
  width: 30%;
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  border-radius: 10px;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;
export const SearchInput = styled.input`
  background-color: #000 !important;
  border: 1px solid #373535 !important;
  color: #fff;
  position: relative;
  padding-left: 4rem !important;
  ::placeholder {
    z-index: 2;
  }
`;
export const LabelSearch = styled.label`
  margin: 0 auto;
  width: 100%;
  position: relative;
  :focus {
    color: #222121;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchIcon = styled(FiSearch)`
  position: absolute;
  z-index: 1;
  color: #7e7e7e;
  font-size: 1.5em;
  left: 1.3rem;
`;
export const MyInvitations = styled.div``;
export const MyFriends = styled.div``;
export const CardsContainer = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  max-height: 450px !important;
  color: #131129;
  overflow-y: auto;
  color: #fff;
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
export const Description = styled.p`
  font-size: 1.4rem !important;
  font-weight: 400 !important;
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 4px !important;
  text-align: center !important;
  line-height: 2.4 !important;
  @media (min-width: 1150px) {
    font-size: 1.4rem !important;
  }
`;
export const MessageBody = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primaryColor};
  min-width: 400px;
  width: 35%;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  margin: auto;
  @media (max-width: 468px) {
    min-width: 300px;
  }
`;
