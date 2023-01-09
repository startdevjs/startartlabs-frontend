import { Button } from "../..";
import AvatarImg from "../../../assets/bighead.svg";
import { getAllMySentRequests } from "../../../pages/profile/functions/getAllMySentRequests";
import api from "../../../services/api";
import {
    Modal,
    ModalContent,
    ButtonClose,
    Card,
    Container,
    CardsArea,
    Separator,
    ButtonsDiv
  } from "./styles";
  
  const ModalViewRequests = ({ isOpen, onClose, receivedFriendshipRequests, setMessage, 
    setSuccess, setError, setReceivedFriendshipRequests, setRevalidate}) => {

    const handleAcceptFriendship = async (friendshipId, userId) => {
      if(friendshipId && userId) {
        try {
          await api.put(`/friendship/${friendshipId}`, {
            status: true
          })
          await handleCreateFriendship(userId)
          handleUpdateRequests(friendshipId)
          setSuccess(true);
          setMessage("Amizade aceita!");
          setRevalidate(prev => !prev);
        } catch (error){
          setError(true)
        }
      }
    }

    const handleCreateFriendship = async (userId) => {
      const data = {
        friendId: userId
      }
      await api.post(`/friendship`, data);
      const myRequests = await getAllMySentRequests()
      if(myRequests) {
        myRequests.filter((request) => {
          return request.friendId === userId
        })
        await api.put(`/friendship/${myRequests[0].id}`, {
          status: true
        }) 
      }
    }

    const handleRefuseFriendship = async (friendshipId) => {
      if(friendshipId) {
        try {
          await api.delete(`/friendship/${friendshipId}`)
          handleUpdateRequests(friendshipId)
          setSuccess(true);
          setMessage("Amizade recusada!");
          setRevalidate(prev => !prev);
        } catch(error) {
          setError(true)
        }
      }
  }

  const handleUpdateRequests = (friendshipId) => {
    if(receivedFriendshipRequests && friendshipId) {
      const newList = receivedFriendshipRequests.filter((request) => {
        return request.friendshipId !== friendshipId
      })
      setReceivedFriendshipRequests(newList);
    }
  }

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
            <h1>Solicitações de amizade recebidas <Separator/></h1>
            <CardsArea>
              {receivedFriendshipRequests && receivedFriendshipRequests.length > 0 ? 
              (receivedFriendshipRequests.map(({name, id, username, avatar, friendshipId}) => ( 
              <Card style={{color: "white"}} 
              key={id}
              > 
              <div 
             className="tile m-0 level" 
             style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row"}}>
             <div className="tile__icon">
             {
                  avatar ? (
                    <img 
                    className="avatar avatar--md" 
                    src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${avatar}`}
                    style={{backgroundColor: "transparent"}}
                    />
                  ) : (
                    <img 
                    className="avatar avatar--md" 
                    src={AvatarImg}
                    style={{backgroundColor: "transparent"}}
                    />
                  )
                }                            
              </div>           
              <div className="tile__container">
                <p className="tile__title m-0" style={{fontSize:"12px"}}>{name}</p>
                <p className="tile__title m-0" style={{fontSize:"12px", color: "#a9a9a9"}}>@{username}</p>
              </div>    
              </div>
              <ButtonsDiv>
              <Button 
              label="Aceitar"
              variant="info"
              onClick={() => handleAcceptFriendship(friendshipId, id)}
              />
              <Button 
              label="Recusar"
              variant="light"
              onClick={() => handleRefuseFriendship(friendshipId)}
              />
              </ButtonsDiv>
              </Card>
            ))) : (<p style={{color: "#fff"}}>Não há solicitações no momento.</p>)}    
             </CardsArea>
            </Container>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalViewRequests;
  