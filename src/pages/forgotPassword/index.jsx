import { Main, Body, Logo, Password, Account } from "./styles";
import { Input, Button, ErrorMessage, Toast, Loading } from "../../components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
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
      await api.post("auth/recoveryPass", data);
      setLoading(false);
      navigate("/code");
    } catch (e) {
      setLoading(false);
      setError(true);
      setMessage(e.response?.data?.message || "Erro, tente novamente mais tarde");
      console.log(e);
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
              <Input text="Email" placeholder="Digite seu email" {...register("email")} />
              {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
              <div style={{ marginTop: "40px" }} />
              <Button label="Solicitar código" variant="info" type="submit" />

              <Account onClick={() => navigate("/login")}>Fazer login</Account>
            </form>
          )}
        </Body>
      </Main>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
    </>
  );
};

export default ForgotPassword;
