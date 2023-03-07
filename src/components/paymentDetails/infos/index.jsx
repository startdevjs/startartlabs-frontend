import { 
  Container, 
  Section, 
  Subtitle, 
  Description, 
  ConfirmedContainer, 
  IconConfirmed,
} from "./styles";

const PaymentDetails = ({ logged, userLogged, price, discount }) => {

  return (
    <Container>
     <ConfirmedContainer>
         <IconConfirmed/>
            <span>Pedido gerado!</span>
        </ConfirmedContainer>
      <Section>
        <Subtitle>Informações do produto</Subtitle>
        <Description>
          <p>Curso de nodejs</p>
          <p>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(price)}</p>
        </Description>
        {
          discount && (
            <Description>
            <p>(-) Desconto</p>
            <p>{discount}%</p>
          </Description>
          )
        }
        <Description>
          <p>Total</p>
          <p>{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(discount ? price * ((100 - discount)/100) : price)}</p>
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

export default PaymentDetails;
