import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import QrCode from "../../assets/qr-code-teste.png";
import WithPiggyBankMan from "../../assets/with-piggy-bank-man.png";
import {
  Container,
  ButtonGoBack,
  Content,
  InfosContainer,
  Title,
  QRCodeContainer,
  Subtitle,
  CodePixContainer,
  ImageContainer,
  ButtonCopyContainer,
  ButtonCopy,
} from "./styles";

const PaymentMethodPix = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log({ data: location.state });

  return (
    <Container>
      <Link to={-1}>
        <ButtonGoBack>
          <AiOutlineArrowLeft />
          Voltar
        </ButtonGoBack>
      </Link>

      <Content>
        <InfosContainer>
          <Title>Pix</Title>

          <p>
            <span>O seu pedido foi realizado com sucesso</span>
            <br />
            Para fazer o pagamento do seu pedido, escaneie o
            <br />
            QRcode abaixo, ou copie e cole o código Pix para
            <br /> realizar o pagamento.
          </p>

          <QRCodeContainer>
            <img src={QrCode} />
          </QRCodeContainer>

          <Subtitle>Código Pix:</Subtitle>
          <CodePixContainer>
            <p>
              0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
            </p>
          </CodePixContainer>
          <ButtonCopyContainer>
            <ButtonCopy>Copiar código</ButtonCopy>
          </ButtonCopyContainer>
        </InfosContainer>

        <ImageContainer>
          <img src={WithPiggyBankMan} alt="Imagem de um homem com um porquinho de dinheiro" />
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default PaymentMethodPix;
