import { format } from "date-fns";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdWarningAmber } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CodeBar from "../../assets/barcode-teste.png";
import {
  Container,
  ButtonGoBack,
  Content,
  InfosContainerBankSlip,
  ButtonCopy,
  ButtonDownload,
  CodeBarContainer,
  ContainerButtonsBankSlip,
  InfosBankSlip,
  TextInfosBankSlip,
  TitleInfosBankSlip,
  TextWarning,
  BankSlipInfosGeneral,
} from "./styles";

const PaymentMethodBankSlip = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log({ data_bankSlip: location.state });

  // add more one day to dueDate
  const dueDate = new Date(location.state?.dueDate);
  dueDate.setDate(dueDate.getDate() + 1);

  return (
    <Container>
      <Link to={-1}>
        <ButtonGoBack>
          <AiOutlineArrowLeft />
          Voltar
        </ButtonGoBack>
      </Link>

      <Content>
        <InfosContainerBankSlip>
          <TextWarning>
            <MdWarningAmber /> Realize o pagamento do Boleto antes de seu vencimento para concluir
            sua compra
          </TextWarning>

          <InfosBankSlip>
            <div>
              <TitleInfosBankSlip>Vencimento:</TitleInfosBankSlip>
              <TextInfosBankSlip>{format(dueDate, "dd/MM/yyyy")}</TextInfosBankSlip>
            </div>

            <div>
              <TitleInfosBankSlip>Valor:</TitleInfosBankSlip>
              <TextInfosBankSlip>
                {location.state?.value?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TextInfosBankSlip>
            </div>

            {/* <div>
              <TitleInfosBankSlip>Código do Boleto:</TitleInfosBankSlip>
              <TextInfosBankSlip>
                43242432.34234.342 423423.4324234 6 42343534313.2343242
              </TextInfosBankSlip>
            </div> */}
          </InfosBankSlip>
          {/* 
          <CodeBarContainer>
            <img src={CodeBar} alt="Código de barras" />
          </CodeBarContainer> */}

          <ContainerButtonsBankSlip>
            {/* <ButtonCopy>Copiar código</ButtonCopy> */}
            <ButtonDownload target="_blank" href={location.state?.bankSlipUrl}>
              Visualizar boleto
            </ButtonDownload>
          </ContainerButtonsBankSlip>

          <BankSlipInfosGeneral>
            <p>
              <span>Informações importantes sobre o pagamento do Boleto</span>- Você pode não
              conseguir realizar o pagamento imediatamente. Neste caso, tente novamente após 30
              segundos.
              <br />
              <br /> - Se o Boleto não for pago até a data de vencimento, seu pedido será cancelado.
              O Boleto estará disponível em Seus pedidos até esta data.
              <br />
              <br /> - Evite pagar o boleto no dia do vencimento caso haja algum feriado local em
              sua cidade, assim como após o expediente bancário em dias úteis. Alguns lugares
              recebem o pagamento, mas só o repassam para a Amazon no dia útil seguinte, quando o
              boleto pode já ter vencido. Atente-se às regras de onde você fará o pagamento para
              evitar que seu pedido seja cancelado.
            </p>
          </BankSlipInfosGeneral>
        </InfosContainerBankSlip>
      </Content>
    </Container>
  );
};

export default PaymentMethodBankSlip;
