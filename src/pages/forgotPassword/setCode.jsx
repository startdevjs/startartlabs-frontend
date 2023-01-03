import { Main, Body, Logo, Password, Account } from "./styles";
import { Input, Button, ErrorMessage, Toast, Loading } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SetCode = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object({
    code: yup.string().required("Campo obrigatório").min(4, "Minímo 4 caracteres"),
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
      await api.patch("auth/alterByCode", data);
      setLoading(false);
      setNext(true);
    } catch (e) {
      setLoading(false);
      setError(true);
      setMessage(e.response?.data?.message || "Erro, tente novamente mais tarde");
    }
  };

  useEffect(() => {
    if (next) {
      setTimeout(() => {
        navigate("/login");
        setNext(false);
      }, 3000);
    }
  }, [next]);

  return (
    <>
      <Main>
        <Body>
          {loading && <Loading />}
          {!loading && (
            <>
              {!next && (
                <form onSubmit={handleSubmit(save)}>
                  <Logo>Startdev LABS</Logo>
                  <p style={{ color: "#dcdcdc", textAlign: "center" }}>
                    Um código foi enviado para seu email!
                  </p>
                  <Input
                    text="Código"
                    placeholder="Digite código recebido no email"
                    {...register("code")}
                  />
                  {errors.code && <ErrorMessage>{errors.code?.message}</ErrorMessage>}
                  <div style={{ marginTop: "40px" }} />
                  <Input
                    text="Senha"
                    placeholder="Digite sua nova senha"
                    {...register("password")}
                    type="password"
                  />
                  {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
                  <div style={{ marginTop: "40px" }} />
                  <Button label="Alterar" variant="info" type="submit" />

                  <Account onClick={() => navigate("/login")}>Fazer login</Account>
                </form>
              )}
              {next && (
                <>
                  <p style={{ color: "#dcdcdc", textAlign: "center", marginBottom: "30px" }}>
                    Senha alterada com sucesso, aguarde você será redirecionado para a tela de login
                  </p>
                  <Loading />
                </>
              )}
            </>
          )}
        </Body>
      </Main>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
    </>
  );
};

export default SetCode;
