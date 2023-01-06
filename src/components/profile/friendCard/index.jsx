import AvatarImg from "../../../assets/bighead.svg"
import api from "../../../services/api";
import {
    Container,
    Card,
    Button
  } from "./styles";
  
  const FriendCard = ({ usersBySearch, sentFriendshipRequests,setSentFriendshipRequests, setRevalidate, allMyFriends }) => {

    const handleAskFriendship = async (userId) => {
      const data = {
        friendId: userId
      }
      setSentFriendshipRequests(prev => [...prev, data])
      const friendship = handleFriendshipId(userId);
      if(!friendship) {
        await api.post(`/friendship`, data);
      }
    }

    const handleDeleteFriendship = async (userId) => {
      setSentFriendshipRequests(prev => prev.filter((request) => request.friendId !== userId))
      const friendship = handleFriendshipId(userId);
      if(friendship) {
      await api.delete(`/friendship/${friendship}`)
      }
  }

    const handleRequestExists = (userId) => {
        const isUserAlreadyExists = sentFriendshipRequests.find((user) => user.friendId === userId);
        setRevalidate(prev => !prev)
        if(isUserAlreadyExists) {
          return true;
        } else {
          return false;
        }
    }

    const handleFriendshipExists = (userId) => {
      const isFriendshipAlreadyExists = allMyFriends?.data?.friends.find((user) => user.friendId === userId);
      setRevalidate(prev => !prev)
      if(isFriendshipAlreadyExists) {
        return true;
      } else {
        return false;
      }
  }

    const handleFriendshipId = (userId) => {
      const isFriendshipAlreadyExists = sentFriendshipRequests.find((user) => user.friendId === userId);
      setRevalidate(prev => !prev)
      if(isFriendshipAlreadyExists) {
        return isFriendshipAlreadyExists.id;
      } else {
        return;
      }
  }

    return (
      <Container>
        {usersBySearch?.user?.map((user) => (
        <Card>
             <div 
             className="tile m-0 level" 
             style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row"}}>
             <div className="tile__icon">
             {
                  user.avatar ? (
                    <img 
                    className="avatar avatar--md" 
                    src={`https://api-labs-dev.startdevjs.com.br/public/images/${user.avatar}`}
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
                <p className="tile__title m-0" style={{fontSize:"12px"}}>{user?.name}</p>
              </div>    
              </div>
              {
                handleFriendshipExists(user?.id) ? (
                  <Button
                  id="button"
                  style={{backgroundColor: "rgba(247, 49, 100, 0.3)"}}
                  disabled={true}
                  >{"Amigos"}</Button>
                ) : handleRequestExists(user?.id) ? (
                  <Button
                  id="button"
                  style={{backgroundColor: "rgba(247, 49, 100, 0.3)"}}
                  onClick={() => {
                    handleDeleteFriendship(user?.id)
                  }}
                  >{"Remover"}</Button>
                ) : (
              <Button
              id={`btn-request-${user?.id}`}
              style={{backgroundColor: "#f73164"}}
              disabled={false}
              onClick={() => {
                handleAskFriendship(user?.id)
              }}
              >{"Adicionar"}</Button>
                )
              }
        </Card>
        ))}      
      </Container>
    );
  };
  
  export default FriendCard;
  