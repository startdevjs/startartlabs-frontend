import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/admin/form";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Toast from "../../../components/toast";
import { onCreate } from "./functions/onCreate";
import { ContainerButtons, ButtonGoBack, ButtonSubmit } from "./styles";

const CreateProjectTag = () => {
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState(null);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "color":
        setColor(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const data = {
      title,
      color,
    };

    onCreate(data, setLoading, setSuccess, setError, setMessage, setProgress, navigate);
  };

  return (
    <>
      {/* {loading && <Loading />} */}

      {/* {!loading && ( */}
      <Form onSubmit={handleSubmit}>
        <Input text="Titulo" name="title" value={title} onChange={onChange} error={errors?.title} />

        <Input
          text="Cor"
          name="color"
          value={color}
          onChange={onChange}
          error={errors?.color}
        />

        <ContainerButtons>
          <ButtonGoBack type="button" onClick={() => navigate("/admin/projectTag")}>
            Voltar
          </ButtonGoBack>
          <ButtonSubmit type="submit">Salvar</ButtonSubmit>
        </ContainerButtons>
      </Form>
      {/* )} */}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default CreateProjectTag;
