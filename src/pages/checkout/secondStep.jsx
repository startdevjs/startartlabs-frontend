import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, ErrorMessage, Toast, Loading } from "../../components";
import CheckoutHeader from "../../components/checkout/header";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container, Body, ContainerCheckoutHeader } from "./styles";
import CheckoutInfos from "../../components/checkout/infos";
import { InputMaskCellPhone, InputMaskCEP, InputMaskCPF } from "../../components/inputMask";
import { useEffect } from "react";
import { getUserById } from "./function/getUserById";

const SecondStep = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [user, setUser] = useState(null);

  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const save = async (data) => {
    setLoading(true);

    if (user?.UserInfo?.length > 0) {
      try {
        await api.put(`/userInfo/${user?.UserInfo[0]?.id}`, {
          ...data,
          name: userLogged?.name,
          email: userLogged?.email,
          phone: phone?.replace(/[^\d]/g, ""),
          mobilePhone: phone?.replace(/[^\d]/g, ""),
          cpfCnpj: cpfCnpj?.replace(/[^\d]/g, ""),
          postalCode: postalCode?.replace(/[^\d]/g, ""),
          userId: userLogged?.id,
          observations: null,
          complement: null,
        });
        navigate("/payment/method/", { state: { data, user } });
        setLoading(false);
      } catch (e) {
        setMessage("Não foi possível, tente mais tarde");
        setError(true);
        setLoading(false);
      }
    } else {
      try {
        await api.post("/userInfo", {
          ...data,
          name: userLogged?.name,
          email: userLogged?.email,
          phone: phone?.replace(/[^\d]/g, ""),
          mobilePhone: phone?.replace(/[^\d]/g, ""),
          cpfCnpj: cpfCnpj?.replace(/[^\d]/g, ""),
          postalCode: postalCode?.replace(/[^\d]/g, ""),
          userId: userLogged?.id,
          observations: null,
          complement: null,
        });
        navigate("/payment/method/", { state: { data, user } });
        setLoading(false);
      } catch (e) {
        setMessage("Não foi possível, tente mais tarde");
        setError(true);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getUserById(userLogged?.id, setLoading, setUser);
  }, []);

  useEffect(() => {
    if (user?.UserInfo?.length > 0) {
      setCpfCnpj(user?.UserInfo[0]?.cpfCnpj);
      setPhone(user?.UserInfo[0]?.phone);
      setPostalCode(user?.UserInfo[0]?.postalCode);
      setValue("address", user?.UserInfo[0]?.address);
      setValue("province", user?.UserInfo[0]?.province);
      setValue("addressNumber", user?.UserInfo[0]?.addressNumber);
    }
  }, [user]);

  return (
    <>
      <Container>
        <Body>
          <ContainerCheckoutHeader>
            <CheckoutHeader
              title="Confirmação de conta"
              firstLink="/payment/checkout/first-step"
              state="Dados Pessoais"
              // arrayStates={[
              //   {
              //     name: "Pagamento",
              //     link: "/checkout/payment",
              //   },
              // ]}
            />
          </ContainerCheckoutHeader>
          {loading && <Loading />}
          {!loading && (
            <form onSubmit={handleSubmit(save)}>
              <div className="grid u-gap-2">
                <div className="grid-c-12">
                  <InputMaskCPF
                    text="CPF"
                    placeholder="Digite seu CPF"
                    value={cpfCnpj}
                    onChange={(e) => {
                      setCpfCnpj(e.target.value);
                    }}
                  />
                  {errors.cpfCnpj && <ErrorMessage>{errors.cpfCnpj?.message}</ErrorMessage>}
                </div>

                <div className="grid-c-7">
                  <InputMaskCellPhone
                    text="Telefone/Celular"
                    placeholder="Digite seu telefone ou celular"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />

                  {errors.phone && <ErrorMessage>{errors.phone?.message}</ErrorMessage>}
                </div>

                <div className="grid-c-5">
                  <InputMaskCEP
                    text="CEP"
                    placeholder="Digite seu CEP"
                    id="postalCode"
                    value={postalCode}
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                    onBlur={async () => {
                      const cep = document.getElementById("postalCode").value;
                      const cepWithoutMask = cep.replace(/[^\d]/g, "");

                      if (cepWithoutMask.length === 8) {
                        await fetch(`https://viacep.com.br/ws/${cepWithoutMask}/json/`)
                          .then((res) => res.json())
                          .then((data) => {
                            setValue("province", data.localidade);
                            setValue("address", data.logradouro);
                          });
                      }
                    }}
                  />
                  {errors.postalCode && <ErrorMessage>{errors.postalCode?.message}</ErrorMessage>}
                </div>

                <div className="grid-c-7">
                  <Input
                    text="Endereço"
                    placeholder="Digite seu endereço"
                    id="address"
                    {...register("address")}
                  />
                  {errors.address && <ErrorMessage>{errors.address?.message}</ErrorMessage>}
                </div>

                <div className="grid-c-5">
                  <Input
                    text="Numero"
                    placeholder="Digite seu Numero"
                    {...register("addressNumber")}
                  />
                  {errors.addressNumber && (
                    <ErrorMessage>{errors.addressNumber?.message}</ErrorMessage>
                  )}
                </div>

                <div className="grid-c-12">
                  <Input
                    text="Cidade"
                    placeholder="Digite seu cidade"
                    id="province"
                    {...register("province")}
                  />
                  {errors.province && <ErrorMessage>{errors.province?.message}</ErrorMessage>}
                </div>
              </div>

              <div style={{ marginTop: "40px" }} />

              <Button label="continuar" variant="info" type="submit" />
            </form>
          )}
        </Body>

        <CheckoutInfos logged={userLogged?.logged} userLogged={userLogged} />
      </Container>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
    </>
  );
};

export default SecondStep;
