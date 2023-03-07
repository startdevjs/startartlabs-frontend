import { useLocation, useNavigate } from "react-router-dom";
import startdevLogo from "../../assets/logoStartDev.png";
import { ButtonCopy } from "../paymentMethod/styles";
import { Container } from "./styles";

const PaymentConfirmed = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <img src={startdevLogo} />
      </div>
      {location.state?.feedback !== 201 ? (
        <>
          <h1>Ops, infelizmente houve um problema com a sua compra!</h1>
          <br />
          <span>Por favor, tente novamente! </span>
          <br />
          <br />
          <ButtonCopy onClick={() => navigate("/payment/method/")}> Voltar</ButtonCopy>
        </>
      ) : (
        <>
          <h1>Agradecemos pela sua compra!</h1>
          <br />
          <span>
            Seja muito bem-vindo(a), agora você faz parte de uma comunidade que cresce a cada dia e
            faz a DIFERENÇA na programação!{" "}
          </span>
          <br />
          <span>Em breve, você receberá mais informações no seu e-mail, fique de olho!</span>
        </>
      )}
    </Container>
  );
};
export default PaymentConfirmed;
