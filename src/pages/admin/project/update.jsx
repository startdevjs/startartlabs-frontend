import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "../../../components/admin/form/styles";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Textarea from "../../../components/textarea";
import Toast from "../../../components/toast";
import { getProjectById } from "./functions/getProjectById";
import { onUpdate } from "./functions/onUpdate";
import { ButtonGoBack, ButtonSubmit, ContainerButtons, RichText } from "./styles";
import api from "../../../services/api";
import AutocompleteProjectTagsComponent from "../../../components/autocompleteProjectTags";
import { getProjectTagById } from "./functions/getProjectTagById";
import { getAllProjectTags } from "./functions/getAllProjectTag";

const UpdateProject = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState({});
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [project, setProject] = useState({});
  const [projectTags, setProjectTags] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProjectById(id, setLoading, setProject);
  }, []);

  useEffect(() => {
    getAllProjectTags(setLoading, setProjectTags);
  }, []);

  useMemo(async () => { 
    if (tag) {
      const { data } = await api.get(`/tag/${tag}`);
      console.log("data", tag);

      setTags([...tags, 
        {
          id: tag,
          name: data.name
        }
      ]);
    }
  }, [tag]);

  useMemo(() => {
    setName(project?.name);
    setDescription(project?.description);
    setImage(project?.image);
    setTags(
      project?.ProjectTag?.map((tag) => {
        return {
          id: tag?.tag.id,
          name: tag?.tag?.name
        };
      })
    );
  }, [project]);

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "tags":
        setTags(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      image,
      tags
    };

    onUpdate(id, data, setLoading, setSuccess, setError, setMessage, setProgress, navigate);
  };

  const removeTag = async (tagId) => {
    await api.delete(`/projectTag/${id}/${tagId}`);
    const updatedArray = tags.filter((tag) => tag.id !== tagId);
    setTags(updatedArray);
  };

  console.log("tags", tags);

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
        
        <RichText value={description} onChange={setDescription} />

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


        <AutocompleteProjectTagsComponent
          text="Tags"
          items={projectTags?.projectTags}
          setDataId={setTag}
          placeholder="Selecione as tags"
        />

        <ul>
          {tags?.map((tag) => (
            <li key={tag.id}
              style={{
                width: "250px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}  
            > 
              {tag.name}
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={async () => {
                  console.log("tag.id", tag);
                  await removeTag(tag.id);
                }}
              >
                x
              </span>
            </li>
          ))}
        </ul>

        <ContainerButtons>
          <ButtonGoBack type="button" onClick={() => navigate("/admin/project")}>
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

export default UpdateProject;
