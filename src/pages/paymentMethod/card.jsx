import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Select from "../../components/select";
import { useState } from "react";
import { format } from "date-fns";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PaymentDetails from "../../components/paymentDetails/infos";
import loadingImage from "../../assets/loading.gif";
import { ErrorMessage, Toast } from "../../components";
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
  ImportantInfos,
} from "./styles";

const schemaOwnCard = yup.object({
  holderName: yup.string().required("Campo obrigatório"),
  number: yup.string().required("Campo obrigatório"),
  expiryMonth: yup.string().required("Campo obrigatório"),
  expiryYear: yup.string().required("Campo obrigatório"),
  cvv: yup.string().required("Campo obrigatório"),
});

const schemaOtherOwnerCard = yup.object({
  creditCardHolderInfoName: yup.string().required("Campo obrigatório"),
  creditCardHolderInfoEmail: yup.string().required("Campo obrigatório"),
  creditCardHolderInfoCpfCnpj: yup.string().required("Campo obrigatório"),
  creditCardHolderInfoPostalCode: yup.string().required("Campo obrigatório"),
  creditCardHolderInfoAddressNumber: yup.string().required("Campo obrigatório"),
  creditCardHolderInfoPhone: yup.string().required("Campo obrigatório"),
  holderName: yup.string().required("Campo obrigatório"),
  cardNumber: yup.string().required("Campo obrigatório"),
  expiryMonth: yup.string().required("Campo obrigatório"),
  expiryYear: yup.string().required("Campo obrigatório"),
  cvv: yup.string().required("Campo obrigatório"),
});

const PaymentMethodCard = () => {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cpf, setCpf] = useState("");
  const [installment, setInstallment] = useState(1);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [creditCardHolderInfoTrue, setCreditCardHolderInfoTrue] = useState(1);
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

  const navigate = useNavigate();
  const location = useLocation();
  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));
  const discount = location.state?.discount;
  const price = location.state?.price;

  const schema = yup.object({
    creditCardHolderInfoTrue: yup.number(),
    creditCardHolderInfoName: yup.string().when("creditCardHolderInfoTrue", {
      is: 2,
      then: yup.string().required("Campo obrigatório"),
    }),
    creditCardHolderInfoEmail: yup.string().when("creditCardHolderInfoTrue", {
      is: 2,
      then: yup.string().required("Campo obrigatório"),
    }),
    creditCardHolderInfoCpfCnpj: yup.string().when("creditCardHolderInfoTrue", {
      is: 2,
      then: yup.string().required("Campo obrigatório"),
    }),
    creditCardHolderInfoPostalCode: yup.string().when("creditCardHolderInfoTrue", {
      is: 2,
      then: yup.string().required("Campo obrigatório"),
    }),
    creditCardHolderInfoAddressNumber: yup.string(),
    creditCardHolderInfoPhone: yup.string().when("creditCardHolderInfoTrue", {
      is: 2,
      then: yup.string().required("Campo obrigatório"),
    }),
    holderName: yup.string().required("Campo obrigatório"),
    cardNumber: yup.string().required("Campo obrigatório"),
    expiryMonth: yup.string().required("Campo obrigatório"),
    expiryYear: yup.string().required("Campo obrigatório"),
    cvv: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const handleDueDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);
    return currentDate;
  };

  const handlePrice = () => {
    if (discount) {
      return price * ((100 - discount) / 100);
    } else {
      return price;
    }
  };

  const handleCreditCard = async (data) => {
    setLoading(true);
    try {
      // Cartão terceiros
      if (creditCardHolderInfoTrue === "2") {
        const res = await api.post("/payment/creditCard", {
          client: location.state?.user_info?.id_pay,
          dueDate: format(handleDueDate(), "yyyy-MM-dd"),
          value: handlePrice(),
          description: "Curso de React",
          externalReference: null,
          installmentCount: Number(installment),
          installmentValue: handlePrice() / Number(installment),
          projectId: 58,
          creditCard: {
            holderName: data.holderName,
            number: data.cardNumber,
            expiryMonth: data.expiryMonth,
            expiryYear: data.expiryYear,
            ccv: data.cvv,
          },
          creditCardHolderInfo: {
            name: data?.creditCardHolderInfoName,
            email: data?.creditCardHolderInfoEmail,
            cpfCnpj: data?.creditCardHolderInfoCpfCnpj,
            postalCode: data?.creditCardHolderInfoPostalCode,
            addressNumber: data?.creditCardHolderInfoAddressNumber,
            addressComplement: null,
            phone: data?.creditCardHolderInfoPhone,
            mobilePhone: data?.creditCardHolderInfoPhone,
          },
          creditCardToken: null,
        });
        navigate("/payment/confirmed", {
          state: {
            feedback: res?.status,
          },
        });
        setLoading(false);
      } else {
        // Cartão próprio

        const res = await api.post("/payment/creditCard", {
          client: location.state?.user_info?.id_pay,
          dueDate: format(handleDueDate(), "yyyy-MM-dd"),
          value: handlePrice(),
          description: "Curso de React",
          externalReference: null,
          installmentCount: Number(installment),
          installmentValue: handlePrice() / Number(installment),
          projectId: 58,
          creditCard: {
            holderName: data.holderName,
            number: data.cardNumber,
            expiryMonth: data.expiryMonth,
            expiryYear: data.expiryYear,
            ccv: data.cvv,
          },
          creditCardHolderInfo: {
            name: location.state?.user?.name,
            email: location.state?.user?.email,
            cpfCnpj: location.state?.user_info?.cpfCnpj,
            postalCode: location.state?.user_info?.postalCode,
            addressNumber: location.state?.user_info?.addressNumber,
            addressComplement: location.state?.user_info?.complement,
            phone: location.state?.user_info?.phone,
            mobilePhone: location.state?.user_info?.mobilePhone,
          },
          creditCardToken: null,
        });
        navigate("/payment/confirmed", {
          state: {
            feedback: res?.status,
          },
        });
      }
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
        <PaymentDetails
          logged={userLogged?.logged}
          userLogged={userLogged}
          price={price}
          discount={discount}
        />
        <InfosContainer>
          <Title>Cartão de crédito</Title>
          {/*  <ContainerBadges>
            <img src={Mastercard} alt="Mastercard" />
            <img src={Visa} alt="Visa" />
          </ContainerBadges>
 */}
          <Form onSubmit={handleSubmit(handleCreditCard)}>
            <Select
              text="Dono do cartão"
              name="creditCardHolderInfoTrue"
              {...register("creditCardHolderInfoTrue")}
              value={creditCardHolderInfoTrue}
              onChange={onChange}
            >
              <option value="1">Meu Cartão</option>
              <option value="2">Cartão de terceiros</option>
            </Select>
            {creditCardHolderInfoTrue === "2" && (
              <>
                <Input
                  text="Nome do dono do cartão"
                  type="text"
                  placeholder="Digite o nome"
                  {...register("creditCardHolderInfoName")}
                />
                {errors.creditCardHolderInfoName && (
                  <ErrorMessage>{errors.creditCardHolderInfoName?.message}</ErrorMessage>
                )}
                <Input
                  text="Email do dono do cartão"
                  type="text"
                  placeholder="Digite o Email"
                  {...register("creditCardHolderInfoEmail")}
                />{" "}
                {errors.creditCardHolderInfoEmail && (
                  <ErrorMessage>{errors.creditCardHolderInfoEmail?.message}</ErrorMessage>
                )}
                <Input
                  text="CPF do dono do cartão"
                  type="text"
                  placeholder="Digite o CPF"
                  {...register("creditCardHolderInfoCpfCnpj")}
                />{" "}
                {errors.creditCardHolderInfoCpfCnpj && (
                  <ErrorMessage>{errors.creditCardHolderInfoCpfCnpj?.message}</ErrorMessage>
                )}
                <Input
                  text="CEP do dono do cartão"
                  type="text"
                  placeholder="Digite o CEP"
                  {...register("creditCardHolderInfoPostalCode")}
                />{" "}
                {errors.creditCardHolderInfoPostalCode && (
                  <ErrorMessage>{errors.creditCardHolderInfoPostalCode?.message}</ErrorMessage>
                )}
                <Input
                  text="Número do endereço do dono do cartão"
                  {...register("creditCardHolderInfoAddressNumber")}
                  type="text"
                  placeholder="Digite o número do endereço"
                />{" "}
                {errors.creditCardHolderInfoAddressNumber && (
                  <ErrorMessage>{errors.creditCardHolderInfoAddressNumber?.message}</ErrorMessage>
                )}
                <Input
                  text="Telefone do dono do cartão"
                  type="text"
                  placeholder="Digite o número do telefone"
                  {...register("creditCardHolderInfoPhone")}
                />{" "}
                {errors.creditCardHolderInfoPhone && (
                  <ErrorMessage>{errors.creditCardHolderInfoPhone?.message}</ErrorMessage>
                )}
              </>
            )}
            <Input
              text="Nome do titular"
              type="text"
              placeholder="Digite o nome"
              {...register("holderName")}
            />{" "}
            {errors.holderName && <ErrorMessage>{errors.holderName?.message}</ErrorMessage>}
            <Input
              text="Número do cartão"
              placeholder="Digite o número do cartão"
              {...register("cardNumber")}
            />{" "}
            {errors.cardNumber && <ErrorMessage>{errors.cardNumber?.message}</ErrorMessage>}
            <W50Inputs>
              <div>
                <Input
                  text="Mês de validade"
                  placeholder="Digite o mês"
                  maxLength={3}
                  {...register("expiryMonth")}
                />{" "}
                {errors.expiryMonth && <ErrorMessage>{errors.expiryMonth?.message}</ErrorMessage>}
              </div>
              <div>
                <Input
                  text="Ano de validade"
                  placeholder="Digite o ano"
                  maxLength={4}
                  {...register("expiryYear")}
                />{" "}
                {errors.expiryYear && <ErrorMessage>{errors.expiryYear?.message}</ErrorMessage>}
              </div>
            </W50Inputs>
            <div>
              <Input
                text="CVV"
                type="text"
                placeholder="Digite o CVV"
                maxLength={3}
                {...register("cvv")}
              />{" "}
              {errors.cvv && <ErrorMessage>{errors.cvv?.message}</ErrorMessage>}
            </div>
            <Select text="Parcela" name="installment" value={installment} onChange={onChange}>
              <option value="1">
                1x de{" "}
                {(handlePrice() / 1)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="2">
                2x de{" "}
                {(handlePrice() / 2)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="3">
                3x de{" "}
                {(handlePrice() / 3)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="4">
                4x de{" "}
                {(handlePrice() / 4)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="5">
                5x de{" "}
                {(handlePrice() / 5)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="6">
                6x de{" "}
                {(handlePrice() / 6)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="7">
                7x de{" "}
                {(handlePrice() / 7)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="8">
                8x de{" "}
                {(handlePrice() / 8)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="9">
                9x de{" "}
                {(handlePrice() / 9)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="10">
                10x de{" "}
                {(handlePrice() / 10)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="11">
                11x de{" "}
                {(handlePrice() / 11)?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </option>

              <option value="12">
                12x de{" "}
                {(handlePrice() / 12)?.toLocaleString("pt-BR", {
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
              {loading ? (
                <ButtonSave disabled={true}>
                  <img src={loadingImage} height="40px" width="60px" /> Processando...
                </ButtonSave>
              ) : (
                <ButtonSave type="submit">Salvar</ButtonSave>
              )}
            </ButtonSaveContainer>
          </Form>
          <ImportantInfos>
            <span style={{ fontWeight: "bold" }}>Informações importantes: </span>
            <br />
            <span>
              {" "}
              - Assim que o pagamento for confirmado, você terá acesso à plataforma de curso;
            </span>
            <br />
            <span>
              {" "}
              - Verifique a caixa de entrada do seu e-mail para visualizar mais informações.
            </span>
            <br />
          </ImportantInfos>
        </InfosContainer>
      </Content>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </Container>
  );
};

export default PaymentMethodCard;
