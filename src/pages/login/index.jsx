import { Main, Body, Logo, Password, Account, LogoContainer } from "./styles";
import LogoStartdevLabs from "../../assets/logo-startlabs.png";
import LogoStartdev from "../../assets/logoStartDev.png";
import { Input, Button, ErrorMessage, Toast, Loading } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import useWhiteLabel from "../../hooks/useWhiteLabel";
import { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const whiteLabel = useWhiteLabel();
  const navigate = useNavigate();

  const schema = yup.object({
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
      const response = await api.post("/login", data);
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

        const previousRoute = window.localStorage.getItem("previousRoute");
        if (previousRoute !== null && previousRoute !== "/login" && previousRoute !== "/register" && previousRoute !== "/forgotPassword" && previousRoute !== "/resetPassword") {
          navigate(previousRoute);
        } else {
          navigate("/");
        }
        setLoading(false);
      } else {
        setMessage("Usuário e/ou senha inválidos");
        setError(true);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setMessage(e.response?.data?.message);
      setError(true);
    }
  };

  return (
    <>
      <Main>
        <Body>
          {loading && <Loading />}
          {!loading && (
            <form onSubmit={handleSubmit(save)}>
              {/* <Logo>Startdev LABS</Logo> */}
              <LogoContainer>
                {whiteLabel?.payment ? (
                  <Logo src={LogoStartdev} alt="Logo Startdev" />
                ) : (
                  <Logo src={LogoStartdevLabs} alt="Logo Startdev Labs" />
                )}
              </LogoContainer>
              <Input text="Email" placeholder="Digite seu email" {...register("email")} />
              {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
              <div style={{ marginTop: "45px" }} />
              <Input
                text="Senha"
                placeholder="Digite sua senha"
                type="password"
                {...register("password")}
              />
              {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
              <Password onClick={() => navigate("/forgotPassword")}>Esqueceu a senha?</Password>
              <Button label="Entrar" variant="info" type="submit" />
              <Account onClick={() => navigate("/register")}>Criar uma conta</Account>
            </form>
          )}
        </Body>
      </Main>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
    </>
  );
};

export default Login;
