import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../../components/admin/form";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Toast from "../../../components/toast";
import { getProjectTagById } from "./functions/getProjectTagById";
import { onUpdate } from "./functions/onUpdate";
import { ContainerButtons, ButtonGoBack, ButtonSubmit } from "./styles";

const UpdateProjectTag = () => {
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState(null);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [projectTag, setProjectTag] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectTagById(id, setLoading, setProjectTag);
  }, []);

  useMemo(() => {
    setTitle(projectTag?.name);
    setColor(projectTag?.color);
  }, [projectTag]);

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

    onUpdate(id, data, setLoading, setSuccess, setError, setMessage, setProgress, navigate);
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
          <ButtonGoBack type="button" onClick={() => navigate("/admin/project/tag")}>
            Voltar
          </ButtonGoBack>
          <ButtonSubmit type="submit">Atualizar</ButtonSubmit>
        </ContainerButtons>
      </Form>
      {/* )} */}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default UpdateProjectTag;
