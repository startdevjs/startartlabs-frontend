import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Select from "../../components/select";
import WithShoppingBagMan from "../../assets/with-shopping-bag-man.png";
import Mastercard from "../../assets/mastercard.png";
import Visa from "../../assets/visa-logo.png";
import {
  Container,
  ButtonGoBack,
  Content,
  InfosContainer,
  Title,
  ImageContainer,
  Form,
  ContainerBadges,
  W50Inputs,
  ButtonSaveContainer,
  ButtonSave,
} from "./styles";
import { useState } from "react";
import { format } from "date-fns";
import api from "../../services/api";

const PaymentMethodCard = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cpf, setCpf] = useState("");
  const [installment, setInstallment] = useState(1);
  const [creditCardHolderInfoTrue, setCreditCardHolderInfoTrue] = useState(null);
  const [creditCardHolderInfo, setCreditCardHolderInfo] = useState({
    name: "",
    email: "",
    cpfCnpj: "",
    postalCode: "",
    addressNumber: "",
    addressComplement: null,
    phone: "",
    mobilePhone: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));
  const navigate = useNavigate();
  const location = useLocation();

  console.log("location.state?.user dasdasd", location.state?.user?.UserInfo[0]);

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "cardNumber":
        setCardNumber(value);
        break;
      case "cvv":
        setCvv(value);
        break;
      case "month":
        setMonth(value);
        break;
      case "year":
        setYear(value);
        break;
      case "cpf":
        setCpf(value);
        break;
      case "installment":
        setInstallment(value);
        break;
      case "creditCardHolderInfoTrue":
        setCreditCardHolderInfoTrue(value);
        break;
      case "creditCardHolderInfoName":
        setCreditCardHolderInfo({ ...creditCardHolderInfo, name: value });
        break;
      case "creditCardHolderInfoEmail":
        setCreditCardHolderInfo({ ...creditCardHolderInfo, email: value });
        break;
      case "creditCardHolderInfoCpfCnpj":
        setCreditCardHolderInfo({ ...creditCardHolderInfo, cpfCnpj: value });
        break;
      case "creditCardHolderInfoPostalCode":
        setCreditCardHolderInfo({ ...creditCardHolderInfo, postalCode: value });
        break;
      case "creditCardHolderInfoAddressNumber":
        setCreditCardHolderInfo({
          ...creditCardHolderInfo,
          addressNumber: value,
        });
        break;
      case "creditCardHolderInfoAddressComplement":
        setCreditCardHolderInfo({
          ...creditCardHolderInfo,
          addressComplement: value,
        });
        break;
      case "creditCardHolderInfoPhone":
        setCreditCardHolderInfo({ ...creditCardHolderInfo, phone: value, mobilePhone: value });
        break;
      default:
        break;
    }
  };

  const valueTeste = 10000;

  const handleCreditCard = async () => {
    setLoading(true);

    try {
      if (creditCardHolderInfoTrue === "2") {
        await api.post("/payment/creditCard", {
          client: location.state?.user?.UserInfo[0]?.id_pay,
          dueDate: format(new Date(), "yyyy-MM-dd"),
          value: valueTeste,
          description: "Curso de React",
          externalReference: null,
          installmentCount: installment,
          installmentValue: valueTeste / Number(installment),
          creditCard: {
            holderName: name,
            number: cardNumber,
            expiryMonth: month,
            expiryYear: year,
            ccv: cvv,
          },
          creditCardHolderInfo: {
            name: creditCardHolderInfo?.name,
            email: creditCardHolderInfo?.email,
            cpfCnpj: creditCardHolderInfo?.cpfCnpj,
            postalCode: creditCardHolderInfo?.postalCode,
            addressNumber: creditCardHolderInfo?.addressNumber,
            addressComplement: null,
            phone: creditCardHolderInfo?.phone,
            mobilePhone: creditCardHolderInfo?.mobilePhone,
          },
          creditCardToken: null,
        });
      } else {
        await api.post("/payment/creditCard", {
          client: location.state?.user?.UserInfo[0]?.id_pay,
          dueDate: format(new Date(), "yyyy-MM-dd"),
          value: valueTeste,
          description: "Curso de React",
          externalReference: null,
          installmentCount: installment,
          installmentValue: valueTeste / Number(installment),
          creditCard: {
            holderName: name,
            number: cardNumber,
            expiryMonth: month,
            expiryYear: year,
            ccv: cvv,
          },
          creditCardHolderInfo: {
            name: location.state?.user?.name,
            email: location.state?.user?.email,
            cpfCnpj: location.state?.user?.UserInfo[0]?.cpfCnpj,
            postalCode: location.state?.user?.UserInfo[0]?.postalCode,
            addressNumber: location.state?.user?.UserInfo[0]?.addressNumber,
            addressComplement: null,
            phone: location.state?.user?.UserInfo[0]?.phone,
            mobilePhone: location.state?.user?.UserInfo[0]?.mobilePhone,
          },
          creditCardToken: null,
        });
      }

      navigate("/");
      setLoading(false);
    } catch (e) {
      setMessage("Não foi possível, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };

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
          <Title>Cartão de crédito</Title>

          <ContainerBadges>
            <img src={Mastercard} alt="Mastercard" />
            <img src={Visa} alt="Visa" />
          </ContainerBadges>

          <Form>
            <Select
              text="Dono do cartão"
              name="creditCardHolderInfoTrue"
              value={creditCardHolderInfoTrue}
              onChange={onChange}
              // error={errors.installment}
            >
              <option value="1">Meu Cartão</option>
              <option value="2">Cartão de terceiros</option>
            </Select>

            {creditCardHolderInfoTrue === "2" && (
              <>
                <Input
                  text="Nome do dono do cartão"
                  name="creditCardHolderInfoName"
                  type="text"
                  placeholder="Digite o nome"
                  value={creditCardHolderInfo.name}
                  onChange={onChange}
                  // error={errors.name}
                />

                <Input
                  text="Email do dono do cartão"
                  name="creditCardHolderInfoEmail"
                  type="text"
                  placeholder="Digite o Email"
                  value={creditCardHolderInfo.email}
                  onChange={onChange}
                  // error={errors.name}
                />

                <Input
                  text="CPF do dono do cartão"
                  name="creditCardHolderInfoCpfCnpj"
                  type="text"
                  placeholder="Digite o CPF"
                  value={creditCardHolderInfo.cpfCnpj}
                  onChange={onChange}
                  // error={errors.cpf}
                />

                <Input
                  text="CEP do dono do cartão"
                  name="creditCardHolderInfoPostalCode"
                  type="text"
                  placeholder="Digite o CEP"
                  value={creditCardHolderInfo.postalCode}
                  onChange={onChange}
                  // error={errors.cpf}
                />

                <Input
                  text="Número do endereço do dono do cartão"
                  name="creditCardHolderInfoAddressNumber"
                  type="text"
                  placeholder="Digite o número do endereço"
                  value={creditCardHolderInfo.addressNumber}
                  onChange={onChange}

                  // error={errors.cpf}
                />

                <Input
                  text="Telefone do dono do cartão"
                  name="creditCardHolderInfoPhone"
                  type="text"
                  placeholder="Digite o número do telefone"
                  value={creditCardHolderInfo.phone}
                  onChange={onChange}
                  // error={errors.cpf}
                />
              </>
            )}

            <Input
              text="Nome do titular"
              name="name"
              type="text"
              placeholder="Digite o nome"
              value={name}
              onChange={onChange}
              // error={errors.name}
            />

            <Input
              text="Número do cartão"
              name="cardNumber"
              type="text"
              placeholder="Digite o número do cartão"
              value={cardNumber}
              onChange={onChange}
              // error={errors.cardNumber}
            />

            <W50Inputs>
              <div>
                <Input
                  text="Mês de validade"
                  name="month"
                  type="text"
                  placeholder="Digite o mês"
                  maxLength={3}
                  value={month}
                  onChange={onChange}
                  // error={errors.cvv}
                />
              </div>

              <div>
                <Input
                  text="Ano de validade"
                  name="year"
                  type="text"
                  placeholder="Digite o ano"
                  maxLength={4}
                  value={year}
                  onChange={onChange}
                  // error={errors.cvv}
                />
              </div>

              {/* Validade */}
            </W50Inputs>

            <div>
              <Input
                text="CVV"
                name="cvv"
                type="text"
                placeholder="Digite o CVV"
                maxLength={3}
                value={cvv}
                onChange={onChange}
                // error={errors.cvv}
              />
            </div>

            <Select
              text="Parcela"
              name="installment"
              value={installment}
              onChange={onChange}
              // error={errors.installment}
            >
              <option value="1">
                1x de{" "}
                {(valueTeste / 1)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="2">
                2x de{" "}
                {(valueTeste / 2)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="3">
                3x de{" "}
                {(valueTeste / 3)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="4">
                4x de{" "}
                {(valueTeste / 4)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="5">
                5x de{" "}
                {(valueTeste / 5)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="6">
                6x de{" "}
                {(valueTeste / 6)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="7">
                7x de{" "}
                {(valueTeste / 7)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="8">
                8x de{" "}
                {(valueTeste / 8)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="9">
                9x de{" "}
                {(valueTeste / 9)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="10">
                10x de{" "}
                {(valueTeste / 10)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="11">
                11x de{" "}
                {(valueTeste / 11)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="12">
                12x de{" "}
                {(valueTeste / 12)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              {/* <option value="2">2x de R$ 50,00</option>
              <option value="3">3x de R$ 33,33</option>
              <option value="4">4x de R$ 33,33</option>
              <option value="5">5x de R$ 33,33</option>
              <option value="6">6x de R$ 33,33</option>
              <option value="7">7x de R$ 33,33</option>
              <option value="8">8x de R$ 33,33</option>
              <option value="9">9x de R$ 33,33</option>
              <option value="10">10x de R$ 33,33</option>
              <option value="11">11x de R$ 33,33</option>
              <option value="12">12x de R$ 33,33</option> */}
            </Select>

            <ButtonSaveContainer>
              <ButtonSave
                type="button"
                onClick={() => {
                  handleCreditCard();
                }}
              >
                Salvar
              </ButtonSave>
            </ButtonSaveContainer>
          </Form>
        </InfosContainer>

        <ImageContainer>
          <img src={WithShoppingBagMan} alt="Homem com sacola de compras" />
        </ImageContainer>
      </Content>
    </Container>
  );
};

export default PaymentMethodCard;
