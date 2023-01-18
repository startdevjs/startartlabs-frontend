import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/admin/form";
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Toast from "../../../components/toast";
import { onCreate } from "./functions/onCreate";
import { ContainerButtons, ButtonGoBack, ButtonSubmit } from "./styles";

const CreateForum = () => {
  const [topicTitle, setTopicTitle] = useState(null);
  const [topicSubtitle, setTopicSubtitle] = useState(null);
  const [replyTitle, setReplyTitle] = useState(null);
  const [replySubtitle, setReplySubtitle] = useState(null);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "topicTitle":
        setTopicTitle(value);
        break;
      case "topicSubtitle":
        setTopicSubtitle(value);
        break;
      case "replyTitle":
        setReplyTitle(value);
        break;
      case "replySubtitle":
        setReplySubtitle(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    const data = {
      topicTitle,
      topicSubtitle,
      replyTitle,
      replySubtitle,
    };

    onCreate(data, setLoading, setSuccess, setError, setMessage, navigate);
  };

  return (
    <>
      {/* {loading && <Loading />} */}

      {/* {!loading && ( */}
      <Form onSubmit={handleSubmit}>
        <Input
          text="Título - Tópicos"
          name="topicTitle"
          type="text"
          placeholder="Título - Tópicos"
          onChange={onChange}
          value={topicTitle}
          error={errors?.topicTitle}
        />

        <Input
          text="Descrição - Tópicos"
          name="topicSubtitle"
          type="text"
          placeholder="Descrição - Tópicos"
          onChange={onChange}
          value={topicSubtitle}
          error={errors?.topicSubtitle}
        />

        <Input
          text="Título - Respostas"
          name="replyTitle"
          type="text"
          placeholder="Título - Respostas"
          onChange={onChange}
          value={replyTitle}
          error={errors?.replyTitle}
        />

        <Input
          text="Descrição - Respostas"
          name="replySubtitle"
          type="text"
          placeholder="Descrição - Respostas"
          onChange={onChange}
          value={replySubtitle}
          error={errors?.replySubtitle}
        />

        <ContainerButtons>
          <ButtonGoBack type="button" onClick={() => navigate("/admin/forum")}>
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

export default CreateForum;
