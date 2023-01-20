import { useMemo, useState } from "react";
import { Input, Toast } from "../..";
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

const ModalReplyTopic = ({ isOpen, onClose, id, setLoading, isCreated, setIsCreated }) => {
  const [topicDescription, setTopicDescription] = useState();
  const [link, setLink] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        description: topicDescription,
        topicId: Number(id),
        link,
      };
      await api.post("/reply", data);
      setIsCreated(!isCreated);
      setLoading(false);
      setSuccess(true);
      setMessage("Tópico criado com sucesso!");
      setTopicDescription("");
      setLink("");
      onClose();
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
              Responder tópico <Separator />
            </h1>
            <form onSubmit={handleSubmit}>
              <RichText
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [],
                    [],
                    [],
                  ],
                }}
                value={topicDescription}
                onChange={(e) => setTopicDescription(e)}
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

export default ModalReplyTopic;
