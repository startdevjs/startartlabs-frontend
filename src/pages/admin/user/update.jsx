import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../../../components/admin/form";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Toast from "../../../components/toast";
import { getUserByIdInRequest } from "../../../store/modules/getUserById/actions";
import { onUpdate } from "./functions/onUpdate";
import { ContainerButtons, ButtonGoBack, ButtonSubmit } from "./styles";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const getUserById = useSelector((state) => state.getUserById);

  useMemo(() => {
    dispatch(getUserByIdInRequest(id));
  }, [dispatch]);

  useMemo(() => {
    setName(getUserById?.data?.name);
    setUsername(getUserById?.data?.username);
    setEmail(getUserById?.data?.email);
  }, [getUserById]);

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const data = {
      name,
      username,
      email,
    };

    onUpdate(id, data, setLoading, setSuccess, setError, setMessage, dispatch);
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <Form onSubmit={handleSubmit}>
          <Input
            text="Nome"
            name="name"
            type="text"
            placeholder="Digite o nome"
            value={name}
            onChange={onChange}
            error={errors.name}
          />

          <Input
            text="Username"
            name="username"
            type="text"
            placeholder="Digite o username"
            value={username}
            onChange={onChange}
            error={errors.username}
          />

          <Input
            text="Email"
            name="email"
            type="email"
            placeholder="Digite o email"
            value={email}
            onChange={onChange}
            error={errors.email}
          />

          <ContainerButtons>
            <ButtonGoBack type="button">Voltar</ButtonGoBack>
            <ButtonSubmit type="submit">Atualizar</ButtonSubmit>
          </ContainerButtons>
        </Form>
      )}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default UpdateUser;
