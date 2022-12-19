import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/admin/form/styles";
import Autocomplete from "../../../components/autocomplete";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Select from "../../../components/select";
import Toast from "../../../components/toast";
import { getAllProjects } from "../project/functions/getAllProjects";
import { onCreate } from "./functions/onCreate";
import { ButtonGoBack, ButtonSubmit, ContainerButtons } from "./styles";

const CreateLession = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [type, setType] = useState("");
  const [projectId, setProjectId] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState({});

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
      case "type":
        setType(value);
        break;
      case "projectId":
        setProjectId(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getAllProjects(setLoading, setProjects);
  }, []);

  const handleSubmit = () => {
    const data = {
      name,
      description,
      image,
      video,
      type,
      projectId,
    };

    onCreate(data, setLoading, setSuccess, setError, setMessage, navigate);
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
            text="Descrição"
            name="description"
            type="description"
            placeholder="Digite a descrição"
            value={description}
            onChange={onChange}
            error={errors.description}
          />

          <Select text="Tipo" name="type" value={type} onChange={onChange} error={errors.type}>
            <option value={null}>Selecione o tipo</option>
            <option value={1}>Vídeo</option>
            <option value={2}>Desafio</option>
          </Select>

          <Autocomplete
            text="Projeto"
            items={projects?.projects}
            setDataId={setProjectId}
            placeholder="Digite o nome do projeto"
          />

          <Input
            text="Imagem"
            name="image"
            type="file"
            placeholder="Selecione a imagem"
            accept="image/*"
            // value={image}
            onChange={(e) => {
              setImage(e.target.files);
            }}
            error={errors.image}
          />

          <Input
            text="Vídeo"
            name="video"
            type="file"
            placeholder="Selecione o vídeo"
            accept="video/*"
            // value={video}
            onChange={(e) => {
              setImage(e.target.files);
            }}
            error={errors.video}
          />

          <ContainerButtons>
            <ButtonGoBack type="button" onClick={() => navigate("/admin/lession")}>
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

export default CreateLession;