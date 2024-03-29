import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../../components/admin/form/styles";
import Autocomplete from "../../../components/autocomplete";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Select from "../../../components/select";
import Textarea from "../../../components/textarea";
import Toast from "../../../components/toast";
import useWhiteLabel from "../../../hooks/useWhiteLabel";
import { getAllProjects } from "../project/functions/getAllProjects";
import { onCreate } from "./functions/onCreate";
import { ButtonGoBack, ButtonSubmit, ContainerButtons, RichText } from "./styles";

const CreateLession = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [videoYT, setVideoYT] = useState("");
  const [type, setType] = useState("");
  const [projectId, setProjectId] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [progressVideo, setProgressVideo] = useState(0);
  const [projects, setProjects] = useState({});

  const navigate = useNavigate();
  const whiteLabel = useWhiteLabel();

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
      case "videoYT":
        setVideoYT(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    getAllProjects(setLoading, setProjects);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      image,
      video,
      type,
      projectId,
      videoYT
    };

    onCreate(
      data,
      setLoading,
      setSuccess,
      setError,
      setMessage,
      setProgress,
      setProgressVideo,
      navigate,
    );
  };

  return (
    <>
      {/* {loading && <Loading />} */}

      {/* {!loading && ( */}
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

        {/* <Textarea
            text="Descrição"
            name="description"
            type="description"
            placeholder="Digite a descrição"
            value={description}
            onChange={onChange}
            error={errors.description}
          /> */}

        <RichText value={description} onChange={setDescription} />

        <Select text="Tipo" name="type" value={type} onChange={onChange} error={errors.type}>
          <option value={null}>Selecione o tipo</option>
          <option value={1}>Vídeo</option>
          <option value={2}>Desafio</option>
        </Select>

        <Autocomplete
          text={whiteLabel?.payment ? "Curso" : "Projeto"}
          items={projects?.projects}
          setDataId={setProjectId}
          placeholder={`Digite o nome do ${whiteLabel?.payment ? "curso" : "projeto"}`}
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
        {progress > 0 && (
          <progress class="progress progress--success" value={progress} max="100"></progress>
        )}

        <Input
          text="Vídeo"
          name="video"
          type="file"
          placeholder="Selecione o vídeo"
          accept="video/*"
          // value={video}
          onChange={(e) => {
            setVideo(e.target.files);
          }}
          error={errors.video}
        />
        {progressVideo > 0 && (
          <progress class="progress progress--success" value={progressVideo} max="100"></progress>
        )}

        <Input
          text="Vídeo do Youtube"
          name="videoYT"
          type="text"
          placeholder="Digite o link do vídeo do Youtube"
          value={videoYT}
          onChange={onChange}
          error={errors.videoYT}
        />

        <ContainerButtons>
          <ButtonGoBack type="button" onClick={() => navigate("/admin/lession")}>
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

export default CreateLession;
