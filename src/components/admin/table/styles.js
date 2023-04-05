import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme: { colors } }) => colors.primaryColor};

  border-radius: 10px;

  padding: 2em;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-spacing: 0;

  text-align: left;
`;

export const Thead = styled.thead`
  width: 100%;

  border-bottom: 3px solid #d4d4d4;
`;

export const Tbody = styled.tbody`
  width: 100%;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #7e7e7e;
`;

export const Th = styled.th`
  font-size: 18px;
  color: #d4d4d4;
  font-weight: 500;

  &:last-child {
    text-align: center;
  }
`;

export const Td = styled.td`
  font-size: 16px;
  color: #d4d4d4;
  font-weight: 400;

  &:last-child {
    text-align: center;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 1em;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1em;
`;

export const Button = styled.button`
  max-width: 100px;
  min-height: 45px;

  padding: 0.2em;

  border: none;
  border-radius: 5px;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.2s;
`;

export const ButtonEdit = styled(Button)`
  background-color: #ffcc00;

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonCorrection = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.secondaryColor};

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonView = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.tertiaryColor};

  a {
    color: ${({ theme: { colors } }) => colors.primaryColor} !important;
  }

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const ButtonDelete = styled(Button)`
  background-color: #ff4d4d;
  color: ${({ theme: { colors } }) => colors.primaryColor};

  &:hover {
    filter: brightness(0.8);
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;

export const Corrected = styled.div`
  background-color: ${(props) => props.background};
  color: ${({ theme: { colors } }) => colors.primaryColor};

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
