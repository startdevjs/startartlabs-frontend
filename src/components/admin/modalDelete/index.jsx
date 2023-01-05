import {
  Modal,
  ModalContent,
  ModalButtons,
  ButtonCancel,
  ButtonDelete,
  ButtonClose,
} from "./styles";

const ModalDeleteComponents = ({ isOpen, onClose, onDelete }) => {
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
          <h1>Tem certeza que deseja excluir este item?</h1>

          <ModalButtons>
            <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
            <ButtonDelete
              onClick={() => {
                onDelete();
              }}
            >
              Eliminar
            </ButtonDelete>
          </ModalButtons>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalDeleteComponents;
