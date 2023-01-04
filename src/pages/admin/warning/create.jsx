import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/admin/form";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Toast from "../../../components/toast";
import { onCreate } from "./functions/onCreate";
import { ContainerButtons, ButtonGoBack, ButtonSubmit } from "./styles";

const CreateWarning = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [action, setAction] = useState(null);
  const [background, setBackground] = useState(null);
  const [image, setImage] = useState("");
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
      case "description":
        setDescription(value);
        break;
      case "action":
        setAction(value);
        break;
      case "background":
        setBackground(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const data = {
      title,
      description,
      action,
      background,
      image,
    };

    onCreate(data, setLoading, setSuccess, setError, setMessage, setProgress, navigate);
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <Form onSubmit={handleSubmit}>
          <Input
            text="Titulo"
            name="title"
            value={title}
            onChange={onChange}
            error={errors?.title}
          />

          <Input
            text="Descrição"
            name="description"
            value={description}
            onChange={onChange}
            error={errors?.description}
          />

          <Input
            text="Ação"
            name="action"
            value={action}
            onChange={onChange}
            error={errors?.action}
          />

          <Input
            text="Background"
            name="background"
            value={background}
            onChange={onChange}
            error={errors?.background}
          />

          <Input
            text="Imagem"
            name="image"
            type="file"
            placeholder="Selecione a imagem"
            accept="image/*"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
            error={errors.image}
          />
          {progress > 0 && (
            <progress class="progress progress--success" value={progress} max="100"></progress>
          )}

          <ContainerButtons>
            <ButtonGoBack type="button" onClick={() => navigate("/admin/warning")}>
              Voltar
            </ButtonGoBack>
            <ButtonSubmit type="submit">Salvar</ButtonSubmit>
          </ContainerButtons>
        </Form>
      )}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default CreateWarning;
