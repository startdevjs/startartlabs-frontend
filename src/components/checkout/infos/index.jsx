import { Container, Title, Section, Subtitle, Description } from "./styles";

const CheckoutInfos = ({ logged, userLogged }) => {
  return (
    <Container>
      <Title>Sua compra</Title>

      <Section>
        <Subtitle>Informações do produto</Subtitle>
        <Description>
          <p>Curso de nodejs</p>
          <p>R$ 500,00</p>
        </Description>
      </Section>

      {logged === true && (
        <Section>
          <Subtitle>Informações do usuário</Subtitle>
          <Description>
            <p>Nome:</p>
            <p>{userLogged?.name}</p>
          </Description>

          <Description>
            <p>Email:</p>
            <p>{userLogged?.email}</p>
          </Description>
        </Section>
      )}
    </Container>
  );
};

export default CheckoutInfos;
