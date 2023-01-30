import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const ButtonGoBack = styled.button`
  width: 200px !important;

  padding: 0.5rem;

  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: transparent;
  color: #2a7ae9;
  font-weight: 700;
  font-size: 1rem;
  line-height: 40px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s;

  border: 1px solid #2a7ae9;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #2a7ae9;
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem;

  width: 100%;
  height: 100%;

  margin-top: 40px;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    padding: 0.2rem;
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 50%;
  height: 100%;

  > p {
    > span {
      font-weight: 800;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const InfosContainerBankSlip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  height: 100%;

  margin-top: -3rem;

  > p {
    > span {
      font-weight: 800;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #2a7ae9;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 100%;

  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #d4d4d4;

  margin-top: 40px;
`;

export const CodePixContainer = styled.div`
  width: 90%;
  padding: 2rem 1rem 1rem 1rem;

  border-radius: 16px;
  background-color: #1d1933;

  > p {
    word-wrap: break-word;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  margin-top: 2rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ButtonCopyContainer = styled.div`
  width: 90%;
  padding: 2rem 0rem;

  @media (max-width: 900px) {
    padding: 1rem 0rem;
    width: 100%;
  }
`;

export const ButtonCopy = styled.button`
  width: 100%;
  padding: 0.5rem;

  border-radius: 1rem;
  background-color: transparent;
  background-color: #2a7ae9;
  color: #fff;

  font-weight: 700;
  font-size: 1rem;
  line-height: 40px;

  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  transition: filter 0.2s;

  border: 1px solid #2a7ae9;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonDownload = styled.a`
  width: 100%;
  padding: 0.5rem;

  border-radius: 1rem;
  /* background-color: transparent;
  color: #2a7ae9; */
  background-color: #2a7ae9;
  color: #fff;

  font-weight: 700;
  font-size: 1rem;
  line-height: 40px;

  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  transition: 0.2s;
  border: 1px solid #2a7ae9;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* background-color: #2a7ae9;
    color: #fff; */
    background-color: transparent;
    color: #2a7ae9;
  }
`;

export const CodeBarContainer = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */

  width: 100%;
  height: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const ContainerButtonsBankSlip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 55%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const InfosBankSlip = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const TextInfosBankSlip = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #d4d4d4;

  margin-top: 10px;
`;

export const TitleInfosBankSlip = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #2a7ae9;

  margin-top: 10px;
`;

export const TextWarning = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #d4d4d4;

  margin-top: 40px;

  display: flex;
  align-items: center;
  gap: 10px;

  > svg {
    color: #ff3b3b;
  }
`;

export const BankSlipInfosGeneral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  height: 100%;
  margin-top: 2rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;

  label {
    margin-top: 30px !important;
  }
`;

export const ContainerBadges = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  margin-top: 15px;
  margin-bottom: 15px;
`;

export const W50Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ButtonSaveContainer = styled.div`
  width: 100%;
  padding: 2rem 0rem;

  @media (max-width: 900px) {
    padding: 1rem 0rem;
    width: 100%;
  }
`;

export const ButtonSave = styled.button`
  width: 100%;
  padding: 0.5rem;

  border-radius: 1rem;
  background-color: transparent;
  background-color: #2a7ae9;
  color: #fff;

  font-weight: 700;
  font-size: 1rem;
  line-height: 40px;

  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  transition: filter 0.2s;

  border: 1px solid #2a7ae9;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;

  margin-top: 2rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PaymentMethodContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: 60%;

  margin-top: 2rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PaymentMethodItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PaymentMethodItemTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #2a7ae9;
`;

export const PaymentMethodItemDescription = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #d4d4d4;
`;

export const PaymentMethodItemButton = styled.button`
  width: 30% !important;
  padding: 0.2rem;

  border-radius: 1rem;
  background-color: transparent;
  background-color: #2a7ae9;
  color: #fff;

  font-weight: 700;
  font-size: 0.9rem;
  line-height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-transform: uppercase;

  cursor: pointer;

  transition: 0.2s;

  border: 1px solid #2a7ae9;

  &:hover {
    background-color: transparent;
    color: #2a7ae9;
  }

  @media (max-width: 900px) {
    width: 60% !important;
  }

  @media (max-width: 600px) {
    width: 100% !important;
  }
`;
