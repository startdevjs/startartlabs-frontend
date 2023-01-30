import { format } from "date-fns";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../../components/loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  PaymentMethodContainer,
  PaymentMethodContent,
  PaymentMethodItem,
  PaymentMethodItemTitle,
  PaymentMethodItemDescription,
  PaymentMethodItemButton,
  Container,
  ButtonGoBack,
  Content,
  InfosContainer,
  Title,
} from "./styles";

const PaymentMethod = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  console.log({ data: location.state });

  const handlePix = async () => {
    setLoading(true);

    try {
      const res = await api.post("/payment/pix", {
        client: location.state?.user?.UserInfo[0]?.id_pay,
        dueDate: format(new Date(), "yyyy-MM-dd"),
        value: 100,
        description: "Curso de React",
        externalReference: null,
        discount: {
          value: 0,
          dueDateLimitDays: 0,
        },
        fine: {
          value: 0,
        },
        interest: {
          value: 0,
        },
        postalService: false,
      });

      navigate("/payment/method/pix", { state: res?.data });

      setLoading(false);
    } catch (e) {
      setMessage("Não foi possível, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };

  const handleBankSlip = async () => {
    setLoading(true);

    try {
      const res = await api.post("/payment/bankSlip", {
        client: location.state?.user?.UserInfo[0]?.id_pay,
        dueDate: format(new Date(), "yyyy-MM-dd"),
        value: 100,
        description: "Curso de React",
        externalReference: null,
        discount: {
          value: 0,
          dueDateLimitDays: 0,
        },
        fine: {
          value: 0,
        },
        interest: {
          value: 0,
        },
        postalService: false,
      });

      navigate("/payment/method/bankSlip", { state: res?.data });

      setLoading(false);
    } catch (e) {
      setMessage("Não foi possível, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };

  const handleCreditCard = async () => {
    setLoading(true);
    navigate("/payment/method/card", {
      state: {
        user: location.state?.user,
      },
    });
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <Link to={-1}>
            <ButtonGoBack>
              <AiOutlineArrowLeft />
              Voltar
            </ButtonGoBack>
          </Link>

          <PaymentMethodContainer>
            <Title>Forma de pagamento</Title>
            <PaymentMethodContent>
              <PaymentMethodItem>
                <PaymentMethodItemTitle>Pix</PaymentMethodItemTitle>
                <PaymentMethodItemDescription>
                  Realize o pagamento do seu pedido com Pix e tenha o seu curso mais rápido
                </PaymentMethodItemDescription>
                <PaymentMethodItemButton
                  type="button"
                  onClick={() => {
                    handlePix();
                  }}
                >
                  Pix
                </PaymentMethodItemButton>
              </PaymentMethodItem>

              <PaymentMethodItem>
                <PaymentMethodItemTitle>Boleto</PaymentMethodItemTitle>
                <PaymentMethodItemDescription>
                  Realize o pagamento do Boleto antes de seu vencimento para concluir sua compra
                </PaymentMethodItemDescription>
                <PaymentMethodItemButton
                  type="button"
                  onClick={() => {
                    handleBankSlip();
                  }}
                >
                  Boleto
                </PaymentMethodItemButton>
              </PaymentMethodItem>

              <PaymentMethodItem>
                <PaymentMethodItemTitle>Cartão de crédito</PaymentMethodItemTitle>
                <PaymentMethodItemDescription>
                  Realize o pagamento do seu pedido com cartão de crédito em até 12x
                </PaymentMethodItemDescription>
                <PaymentMethodItemButton
                  type="button"
                  onClick={() => {
                    handleCreditCard();
                  }}
                >
                  Cartão de crédito
                </PaymentMethodItemButton>
              </PaymentMethodItem>
            </PaymentMethodContent>
          </PaymentMethodContainer>
        </Container>
      )}
    </>
  );
};

export default PaymentMethod;
