import { useEffect, useMemo, useState } from "react";
import { Input, Toast } from "../..";
import Autocomplete from "../../autocomplete";
import api from "../../../services/api";
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
import { getAllProjects } from "./getAllProjects";
import { getAllLessions } from "./getAllLessions";

const ModalCreateTopic = ({ isOpen, onClose, id, setLoading, isCreated, setIsCreated }) => {
  const [topicDescription, setTopicDescription] = useState();
  const [topicTitle, setTopicTitle] = useState();
  const [link, setLink] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [lessionId, setLessionId] = useState("");
  const [lession, setLessions] = useState({});

  useEffect(() => {
    getAllLessions(setLoading, setLessions);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        title: topicTitle,
        description: topicDescription,
        lessionId: Number(lessionId),
        link,
      };
      await api.post("/topic", data);
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
              <Autocomplete
                text="A qual projeto esse tópico pertence?"
                items={lession?.lessions}
                setDataId={setLessionId}
                placeholder="Digite o nome do projeto"
              />
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
