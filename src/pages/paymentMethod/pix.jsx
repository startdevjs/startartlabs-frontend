import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Toast } from "../../components";
import PaymentDetails from "../../components/paymentDetails/infos";
import {
  Container,
  ButtonGoBack,
  Content,
  InfosContainer,
  Title,
  QRCodeContainer,
  Subtitle,
  ButtonCopyContainer,
  ButtonCopy,
  ButtonFinish,
  IconRight,
} from "./styles";

const PaymentMethodPix = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));

  const navigate = useNavigate();
  const location = useLocation();

  const price = location.state?.price;
  const discount = location.state?.discount;

  function copyToClickBoard(pixCode) {
    navigator.clipboard
      .writeText(pixCode)
      .then(() => {
        setSuccess(true);
        setMessage("Código copiado com sucesso!");
      })
      .catch((err) => {
        setError(true);
        setMessage("Erro ao tentar copiar código");
      });
  }

  return (
    <Container>
      <Link to={-1}>
        <ButtonGoBack>
          <AiOutlineArrowLeft />
          Voltar
        </ButtonGoBack>
      </Link>
      <Content>
      <PaymentDetails 
      logged={userLogged?.logged} 
      userLogged={userLogged} 
      price={price} 
      discount={discount}
      />
        <InfosContainer>
          <QRCodeContainer>
            <img 
             src={"data:image/png;base64," + location.state?.pix?.encodedImage}
             alt="QR Code"
             width={200}
             height={200}
            />
          </QRCodeContainer>
          {/* <Subtitle>Código Pix:</Subtitle>
          <CodePixContainer>
            <p>
              {location.state?.pix?.payload}
            </p>
          </CodePixContainer> */}
          <ButtonCopyContainer>
            <ButtonCopy onClick={() => copyToClickBoard(location.state?.pix?.payload)}>
              Copiar código
            </ButtonCopy>
            <div>
           <span> 1. Para realizar o pagamento, abra o aplicativo do seu banco no celular;</span><br/>
           <span> 2. Escolha a opção de pagar com Pix e escaneie o QRcode, ou copie e cole o código Pix;</span><br/>
           <span> 3. Após confirmado o seu pagamento, você receberá no e-mail as informações de acesso à plataforma.</span><br/>
            </div>    
          </ButtonCopyContainer>
          <ButtonFinish onClick={() => navigate("/payment/confirmed")}> Já fiz meu pagamento <IconRight/></ButtonFinish>
        </InfosContainer>
      </Content>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </Container>
  );
};

export default PaymentMethodPix;
