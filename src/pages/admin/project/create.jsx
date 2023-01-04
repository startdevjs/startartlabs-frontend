import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/admin/form/styles";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Textarea from "../../../components/textarea";
import Toast from "../../../components/toast";
import { onCreate } from "./functions/onCreate";
import { ButtonGoBack, ButtonSubmit, ContainerButtons, RichText } from "./styles";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [project, setProject] = useState({});

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const data = {
      name,
      description,
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
            text="Nome"
            name="name"
            type="text"
            placeholder="Digite o nome"
            value={name}
            onChange={onChange}
            error={errors.name}
          />

          <Textarea
            text="Descrição"
            name="description"
            type="description"
            placeholder="Digite a descrição"
            value={description}
            onChange={onChange}
            error={errors.description}
          />

          {/* <RichText value={description} onChange={setDescription} /> */}

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
            <ButtonGoBack type="button" onClick={() => navigate("/admin/project")}>
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

export default CreateProject;
