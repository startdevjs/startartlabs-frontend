import { format } from "date-fns";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../../components/loading";
import { Toast } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import PixImage from "../../assets/pix.svg"
import BoletoImage from "../../assets/boleto.png"
import MasterCard from "../../assets/mastercard.png"
import Visa from "../../assets/visa-logo.png"
import PayPal from "../../assets/pay-pal.png"
import ApplePay from "../../assets/apple-pay.png"
import Elo from "../../assets/elo.png"
import { getUserById } from "../checkout/function/getUserById";
import {
  PaymentMethodContainer,
  PaymentMethodContent,
  PaymentMethodItem,
  PaymentMethodItemDescription,
  PaymentMethodItemButton,
  Container,
  ButtonGoBack,
  Title,
  ButtonCoupon,
  CouponContainer,
  Body,
  CouponSuccess,
  CouponFailed
} from "./styles";

const PaymentMethod = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState();
  const [coupon, setCoupon] = useState();
  const [couponValidate, setCouponValidate] = useState();
  const [discount, setDiscount] = useState();
  const [valueCourse, setvalueCourse] = useState(100);

  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));
  const navigate = useNavigate();

  useEffect(() => {
    if(userLogged) {
      getUserById( userLogged?.id, setLoading, setUser);
    }
  }, []);

  const handleSubmitCoupon = async () => {
  try {
  if(coupon){
    const couponFilter = `?code=${coupon}`
    const { data } = await api.get(`/coupon/${58}/getCoupon${couponFilter}`) 
    if(data.status === true) {
      setCouponValidate(true)
      setDiscount(data.percentage)
    } else {
      setCouponValidate(false)
    }
  }
} catch (error) {
  setCouponValidate(false)
}
  }

  const handlePix = async () => {
    setLoading(true);
    try {
      const handlePostPix = await api.post("/payment/pix", {
        client: Number(user.UserInfo[0].id_pay),
        dueDate: format(handleDueDate(), "yyyy-MM-dd"),
        value: discount ? valueCourse * ((100 - discount)/100) : valueCourse,
        description: "Curso de React",
        externalReference: null,
        projectId: 58,
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
     
      if(handlePostPix?.data) {
        const getQrCode = await api.get(`/payment/pix/qrcode/${handlePostPix?.data?.id}`)
        navigate("/payment/method/pix", { state: {
            pix: getQrCode?.data,
            discount: discount && valueCourse * (discount/100),
            price: valueCourse
          } });
        }
      setLoading(false);
    } catch (e) {
      setMessage("Não foi possível, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };

  const handleDueDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate;
  }

  const handleBankSlip = async () => {
    setLoading(true);
    try {
      if(user) {
        const res = await api.post("/payment/bankSlip", {
          client: Number(user.UserInfo[0].id_pay),
          dueDate: format(handleDueDate(), "yyyy-MM-dd"),
          value: discount ? valueCourse * ((100 - discount)/100) : valueCourse,
          description: "Curso de React",
          externalReference: null,
          projectId: 58,
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
      navigate("/payment/method/bankSlip", { state: {
        bankSlip: res?.data,
        discount: discount && valueCourse * (discount/100),
        price: valueCourse
      }});
      }
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
        user: user,
        user_info: user?.UserInfo[0],
        discount: discount && valueCourse * (discount/100),
        price: valueCourse
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
        <Body>
          <CouponContainer>
        <Title>Possui cupom de desconto?</Title>
        <div>
          <input 
          placeholder="Digite o código" 
          type="text" 
          value={coupon} 
          onChange={(e) => setCoupon(e.target.value)}
          />
          <ButtonCoupon type="button" onClick={() => handleSubmitCoupon()}>Aplicar</ButtonCoupon>
          {
            discount && couponValidate && (
              <CouponSuccess>Desconto de {discount}% aplicado! Prossiga para o pagamento.</CouponSuccess>
            )
          }
          {
            couponValidate === false && (
              <CouponFailed>Cupom inválido!</CouponFailed>
            )
          }
        </div>
     
          </CouponContainer>
          <PaymentMethodContainer>
            <Title>Formas de pagamento</Title>
            <PaymentMethodContent>
              <PaymentMethodItem>
                <PaymentMethodItemDescription>
                  Realize o pagamento do seu pedido com Pix e obtenha o seu curso mais rápido:
                </PaymentMethodItemDescription>
                <PaymentMethodItemButton
                  type="button"
                  onClick={() => {
                    handlePix();
                  }}
                >
                  <img src={PixImage} width="120px"/>
                </PaymentMethodItemButton>
              </PaymentMethodItem>
              <PaymentMethodItem>
                <PaymentMethodItemDescription>
                  Realize o pagamento do boleto antes de seu vencimento para concluir sua compra:
                </PaymentMethodItemDescription>
                <PaymentMethodItemButton
                  type="button"
                  onClick={() => {
                    handleBankSlip();
                  }}
                >
                  <img src={BoletoImage} width="120px"/>
                </PaymentMethodItemButton>
              </PaymentMethodItem>
              <PaymentMethodItem>
                <PaymentMethodItemDescription>
                  Realize o pagamento do seu pedido com cartão de crédito em até 12x:
                </PaymentMethodItemDescription>
                <PaymentMethodItemButton
                  type="button"
                  onClick={() => {
                    handleCreditCard();
                  }}
                >    
                   <img src={MasterCard} width="30px" />
                   <img src={Visa} width="30px" />
                   <img src={PayPal} width="20px" />
                   <img src={ApplePay} width="40px" />
                   <img src={Elo} width="40px" />
                 ...
                </PaymentMethodItemButton>
              </PaymentMethodItem>
            </PaymentMethodContent>
          </PaymentMethodContainer>
          </Body>
        </Container>
      )}
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default PaymentMethod;
