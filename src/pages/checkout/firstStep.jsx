import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, ErrorMessage, Toast, Loading } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckoutHeader from "../../components/checkout/header";
import api from "../../services/api";
import { Container, Body, ContainerCheckoutHeader } from "./styles";
import CheckoutInfos from "../../components/checkout/infos";

const FirstStep = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);

  const userLogged = JSON.parse(localStorage.getItem("startdev-labs"));
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório").min(6, "Minímo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const save = async (data) => {
    setLoading(true);
    try {
      await api.post("/user", data);

      const dataToLogin = {
        email: data.email,
        password: data.password,
      };

      const response = await api.post("/login", dataToLogin);
      if (response?.data?.token) {
        const user = await api.post("/validate", {
          token: response?.data?.token,
        });

        const object = {
          id: user?.data?.id,
          name: user?.data?.name,
          admin: user?.data?.admin,
          email: user?.data?.email,
          username: user?.data?.username,
          token: response?.data?.token,
          logged: true,
        };
        api.defaults.headers.Authorization = `Bearer ${response?.data?.token}`;
        localStorage.setItem("startdev-labs", JSON.stringify(object));
        navigate("/payment/checkout/second-step");
        setLoading(false);
      } else {
        setMessage("Usuário e/ou senha inválidos");
        setError(true);
        setLoading(false);
      }
    } catch (e) {
      setMessage("Não foi possível, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };

  const checkUsername = async (value) => {
    try {
      const data = { username: value };
      const response = await api.post("/user/check/username", data);
      if (response?.data?.message === "OFF") {
        setErrorUsername(true);
      } else {
        setErrorUsername(false);
      }
    } catch (e) {
      setError(true);
      setMessage("Erro, tente novamente mais tarde");
    }
  };

  return (
    <>
      <Container>
        <Body>
          <ContainerCheckoutHeader>
            <CheckoutHeader title="Confirmação de conta" firstLink="/payment/checkout/first-step" />
          </ContainerCheckoutHeader>
          {loading && <Loading />}
          {!loading && (
            <form onSubmit={handleSubmit(save)}>
              <div className="grid u-gap-2">
                <div className="grid-c-6">
                  <Input
                    text="Nome"
                    placeholder="Digite seu nome"
                    {...register("name")}
                    value={userLogged?.logged === true && userLogged?.name}
                    disabled={userLogged?.logged === true}
                  />
                  {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
                </div>
                <div className="grid-c-6">
                  <Input
                    text="Usuário"
                    placeholder="Escolha o nome do seu @usuário"
                    {...register("username")}
                    onBlur={(ev) => checkUsername(ev.target.value)}
                    value={userLogged?.logged === true && userLogged?.username}
                    disabled={userLogged?.logged === true}
                  />
                  {errors.username && <ErrorMessage>{errors.username?.message}</ErrorMessage>}
                  {errorUsername && <ErrorMessage>Usuário já existe.</ErrorMessage>}
                </div>
                {userLogged?.logged !== true ? (
                  <>
                    <div className="grid-c-6">
                      <Input
                        text="Email"
                        placeholder="Digite seu melhor email"
                        {...register("email")}
                        disabled={errorUsername || userLogged?.logged === true}
                        value={userLogged?.logged === true && userLogged?.email}
                      />
                      {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid-c-12">
                      <Input
                        text="Email"
                        placeholder="Digite seu melhor email"
                        {...register("email")}
                        disabled={errorUsername || userLogged?.logged === true}
                        value={userLogged?.logged === true && userLogged?.email}
                      />
                      {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                    </div>
                  </>
                )}
                {userLogged?.logged !== true && (
                  <>
                    <div className="grid-c-6">
                      <Input
                        text="Senha"
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                        disabled={errorUsername || userLogged?.logged === true}
                      />
                      {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
                    </div>
                  </>
                )}
              </div>
              <div style={{ marginTop: "40px" }} />
              {userLogged?.logged === true ? (
                <Button
                  label="continuar"
                  variant="info"
                  type="button"
                  onClick={() => {
                    navigate("/payment/checkout/second-step");
                  }}
                />
              ) : (
                <Button label="continuar" variant="info" type="submit" />
              )}
            </form>
          )}
        </Body>

        <CheckoutInfos logged={userLogged?.logged} userLogged={userLogged} />
      </Container>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
    </>
  );
};

export default FirstStep;
