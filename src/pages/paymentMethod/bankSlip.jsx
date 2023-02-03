import { format } from "date-fns";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PaymentDetails from "../../components/paymentDetails/infos";
import {
  Container,
  ButtonGoBack,
  Content,
  InfosContainerBankSlip,
  ButtonDownload,
  ContainerButtonsBankSlip,
  InfosBankSlip,
  TextInfosBankSlip,
  TitleInfosBankSlip,
  TextWarning,
  BankSlipInfosGeneral,
  IconAtention,
  ButtonFinish,
  IconRight
} from "./styles";

const PaymentMethodBankSlip = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));

  // add more one day to dueDate
  const dueDate = new Date(location.state?.bankSlip?.dueDate);
  dueDate.setDate(dueDate.getDate() + 1);

  const price = location.state?.price;
  const discount = location.state?.discount;

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
        <InfosContainerBankSlip>
          <TextWarning>
            <IconAtention/> 
            <span>Realize o pagamento do boleto antes de seu vencimento para concluir
            sua compra!
            </span>
          </TextWarning>
          <InfosBankSlip>
            <div>
              <TitleInfosBankSlip>Vencimento</TitleInfosBankSlip>
              <TextInfosBankSlip>{dueDate && format(dueDate, "dd/MM/yyyy")}</TextInfosBankSlip>
            </div>
            <div>
              <TitleInfosBankSlip>Valor</TitleInfosBankSlip>
              <TextInfosBankSlip>
                {location.state?.bankSlip?.value?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TextInfosBankSlip>
            </div>
          </InfosBankSlip>
          <ContainerButtonsBankSlip>
            <ButtonDownload target="_blank" href={location.state?.bankSlip?.bankSlipUrl}>
              Visualizar boleto
            </ButtonDownload>
          </ContainerButtonsBankSlip>
          <BankSlipInfosGeneral>
              <span style={{fontWeight: "bold"}}>Informações importantes: </span><br/>
              <span>- O boleto também foi enviado ao seu e-mail.</span><br/>
              <span> - Você pode não conseguir realizar o pagamento imediatamente. 
                Neste caso, tente novamente após 30
              segundos.</span>
              <br /> 
              <span>- Se o boleto não for pago até a data de vencimento, seu pedido será cancelado.</span>
              <br /> 
              <span>- Evite pagar o boleto no dia do vencimento caso haja algum feriado local em
              sua cidade, assim como após o expediente bancário em dias úteis. Alguns lugares
              recebem o pagamento, mas só o repassam no dia útil seguinte, quando o
              boleto pode já ter vencido. Atente-se às regras de onde você fará o pagamento para
              evitar que seu pedido seja cancelado.</span>
          </BankSlipInfosGeneral>
          <ButtonFinish 
          onClick={() => navigate("/payment/confirmed")}
          > Já fiz meu pagamento <IconRight/></ButtonFinish>
        </InfosContainerBankSlip>
      </Content>
    </Container>
  );
};

export default PaymentMethodBankSlip;
