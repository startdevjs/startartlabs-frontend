import { useState } from "react";
import { Input, Toast } from "../..";
import Autocomplete from "../../autocomplete";
import api from "../../../services/api";
import { useParams } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ButtonClose,
  Container,
  Separator,
  RichText,
  ContainerButtons,
  ButtonGoBack,
  ButtonSubmit,
} from "./styles";


const ModalCreateTopic = ({ isOpen, onClose, id, setLoading, isCreated, setIsCreated, isFilterByProject, lessionByProject }) => {
  const [topicDescription, setTopicDescription] = useState();
  const [topicTitle, setTopicTitle] = useState();
  const [link, setLink] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [lessionIdByProject, setLessionIdByProject] = useState();

  const {id: lessionId} = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if(isFilterByProject) {
        const data = {
          title: topicTitle,
          description: topicDescription,
          lessionId: Number(lessionIdByProject),
          link,
        };
        await api.post("/topic", data);
      } else {
        const data = {
          title: topicTitle,
          description: topicDescription,
          lessionId: Number(lessionId),
          link,
        };
        await api.post("/topic", data);
      }
      setIsCreated(!isCreated);
      setLoading(false);
      setSuccess(true);
      setMessage("Tópico criado com sucesso!");
      onClose();
      setTopicDescription("");
      setTopicTitle("");
      setLink("");
    } catch (e) {
      setMessage("Ocorreu um erro, tente mais tarde");
      setError(true);
      setLoading(false);
    }
  };
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
        }}
      >
        <ButtonClose onClick={onClose}>X</ButtonClose>
        <ModalContent>
          <Container>
            <h1>
              {" "}
              Criar tópico relacionado a este desafio <Separator />
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                text="Título"
                name="title"
                type="text"
                required
                placeholder="Digite o título do seu tópico"
                value={topicTitle}
                onChange={(e) => setTopicTitle(e.target.value)}
                error={errors.title}
              />
              <RichText value={topicDescription} onChange={(e) => setTopicDescription(e)} />
              {
                isFilterByProject && (
                <Autocomplete
                text="A qual aula esse tópico pertence?"
                items={lessionByProject?.lessions}
                setDataId={setLessionIdByProject}
                placeholder="Digite o nome da aula"
              /> 
                )
              }
              <Input
                text="Link do seu repositório"
                placeholder="Ex: Github"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <ContainerButtons>
                <ButtonGoBack type="button" onClick={onClose}>
                  Voltar
                </ButtonGoBack>
                <ButtonSubmit type="submit">Publicar</ButtonSubmit>
              </ContainerButtons>
            </form>
          </Container>
        </ModalContent>
      </Modal>
      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default ModalCreateTopic;
