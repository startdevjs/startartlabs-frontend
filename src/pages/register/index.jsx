import { Main, Body, Logo, Account } from "./styles";
import { Input, Button, ErrorMessage, Toast, Loading } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

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
      navigate("/");
      setLoading(false);
    } catch (e) {
      setMessage("Não foi possível, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Main>
        <Body>
          {loading && <Loading />}
          {!loading && (
            <form onSubmit={handleSubmit(save)}>
              <Logo>Startdev LABS</Logo>
              <div className="grid u-gap-2">
                <div className="grid-c-6">
                  <Input text="Nome" placeholder="Digite seu nome" {...register("name")} />
                  {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
                </div>
                <div className="grid-c-6">
                  <Input
                    text="Usuário"
                    placeholder="Escolha o nome do seu @usuário"
                    {...register("username")}
                  />
                  {errors.username && <ErrorMessage>{errors.username?.message}</ErrorMessage>}
                </div>
                <div className="grid-c-6">
                  <Input
                    text="Email"
                    placeholder="Digite seu melhor email"
                    {...register("email")}
                  />
                  {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                </div>
                <div className="grid-c-6">
                  <Input
                    text="Senha"
                    type="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                  />
                  {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
                </div>
              </div>
              <div style={{ marginTop: "40px" }} />
              <Button label="Entrar" variant="info" type="submit" />
              <Account onClick={() => navigate("/login")}>Já possui uma conta?</Account>
            </form>
          )}
        </Body>
      </Main>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
    </>
  );
};

export default Login;
