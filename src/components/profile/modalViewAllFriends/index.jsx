import { useEffect, useMemo, useState } from "react";
import AvatarImg from "../../../assets/bighead.svg"
import { getAllMyFriends } from "../../../pages/profile/functions/getAllMyFriends";
import api from "../../../services/api";
import Pagination from "../pagination";
import {
  Modal,
  ModalContent,
  ButtonClose,
  Card,
  Container,
  Separator,
  CardsArea,
  Button
} from "./styles";

const ModalViewAllFriends = ({ isOpen, onClose, allMyFriends, setMessage, setSuccess, 
  setError, setAllMyFriends, setRevalidate }) => {
    const [page, setPage] = useState(1);

  const handleDeleteFriendship = async (userId) => {
    try { 
      await api.delete(`/friendship/${userId}`)
      getAllMyFriends(setAllMyFriends)
      setSuccess(true);
      setMessage("Amizade excluída!");
      setRevalidate(prev => !prev)
    } catch {
      setError(true);
      setMessage("Erro ao deletar usuário");
    }
  }

  useMemo(() => {
    const pageAtual = page - 1;
    const skip = Number(pageAtual * 20);

    if (skip >= 20) {
      getAllMyFriends(setAllMyFriends, skip)
    } else {
      getAllMyFriends(setAllMyFriends)
      setPage(1);
    }
  }, [page]);

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
          <h1>Todos os meus amigos  <Separator/></h1>
          <CardsArea>
           {allMyFriends ? (allMyFriends.data.friends.map(({friend, id}) => (
            <Card style={{color: "white"}} key={id}>
             <div 
             className="tile m-0 level" 
             style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row"}}>
             <div className="tile__icon">
             {
                  friend?.avatar ? (
                    <img 
                    className="avatar avatar--sm" 
                    src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${friend.avatar}`}
                    />
                  ) : (
                    <img 
                    className="avatar avatar--sm" 
                    src={AvatarImg}
                    style={{backgroundColor: "transparent"}}
                    />
                  )
                }                            
              </div>           
              <div className="tile__container">
                <p className="tile__title m-0" style={{fontSize:"12px"}}>{friend?.name}</p>
                <p className="tile__title m-0" style={{fontSize:"12px", color: "#a9a9a9"}}>@{friend?.username}</p>
              </div>    
              </div>
              <Button
              onClick={() => {
                handleDeleteFriendship(id)
              }}
              >Excluir</Button>
            </Card>
          ))) : (<p style={{color: "#fff"}}>Você ainda não possui amigos.</p>)} 
           </CardsArea>    
          </Container>
        </ModalContent>
        {
            allMyFriends && (
              <div style={{display: "flex", width: "80%", justifyContent: "flex-end"}}>
              <Pagination
              totalCountOfRegisters={allMyFriends.data.friends.length}
              currentPage={page}
              onPageChange={setPage}
              registersPerPage={20}
            /> 
            </div>
            )
           }
      </Modal>
    </>
  );
};

export default ModalViewAllFriends;
