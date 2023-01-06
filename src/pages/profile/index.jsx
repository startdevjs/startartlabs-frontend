import api from "../../services/api";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { onUpdate } from "./onUpdate";
import FriendCard from "../../components/profile/friendCard";
import { getUsersBySearch } from "./functions/getUsersBySearch";
import AvatarImg from "../../assets/bighead.svg"
import { getAllMyFriends } from "./functions/getAllMyFriends";
import ModalViewAllFriends from "../../components/profile/modalViewAllFriends";
import {Input, Loading, Button, ErrorMessage, Toast} from "../../components"
import ModalViewRequests from "../../components/profile/modalViewRequests";
import { getFriendshipRequests } from "./functions/getFriendshipRequests";
import { getAllMySentRequests } from "./functions/getAllMySentRequests";
import { 
    Body, 
    Logo, 
    Main, 
    AlterPassword, 
    AlterPasswordModal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    ModalContent,
    AvatarArea,
    Container,
    SearchInput,
    LabelSearch,
    SearchIcon,
    MyInvitations,
    MyFriends,
    CardsContainer
} from "./styles";

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [validPassword, setValidPassword] = useState(true);
    const [isOpenModalFriends, setIsOpenModalFriends] = useState(false);
    const [closeModalFriends, setCloseModalFriends] = useState(false);
    const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
    const [closeModalRequests, setCloseModalRequests] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [avatar, setAvatar] = useState();
    const [usersBySearch, setUsersBySearch] = useState("");
    const [nameToSearch, setNameToSearch] = useState("");
    const [allMyFriends, setAllMyFriends] = useState("");
    const [receivedFriendshipRequests, setReceivedFriendshipRequests] = useState([]);
    const [sentFriendshipRequests, setSentFriendshipRequests] = useState([]);
    const [revalidate, setRevalidate] = useState(false);

    const session = JSON.parse(localStorage.getItem("startdev-labs"));
    const userId = session?.id
    const uploadInputRef = useRef(null);
    
  useEffect(() => {
    setName(session?.name);
    setEmail(session?.email);
  }, [session?.name, session?.email]);

  useEffect(() => {
    if(nameToSearch && nameToSearch.length > 2) {
      getUsersBySearch(setUsersBySearch, nameToSearch);
    }
  }, [nameToSearch]);

  const handleAvatar = async (id) => {
    const { data }= await api.get(`/user/${id}`)
    if(data?.avatar){
      return `${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${data?.avatar}`
    } 
    return;
  }

  useEffect(() => {
    handleAvatar(userId).then((response) => {setAvatar(response)});
  }, [userId]);

  useMemo(() => {
    getAllMyFriends(setAllMyFriends)
    getFriendshipRequests(setReceivedFriendshipRequests)
    getAllMySentRequests(setSentFriendshipRequests)
}, [userId, revalidate]);



const handleOpenAndCloseModalFriends = () => {
  setIsOpenModalFriends(!isOpenModalFriends);
  setCloseModalFriends(!closeModalFriends);
};

const handleOpenAndCloseModalRequests = () => {
  setIsOpenModalRequests(!isOpenModalRequests);
  setCloseModalRequests(!closeModalRequests);
};

  const schema = yup.object({
    password: yup
      .string()
      .required("É obrigatório informar sua nova senha!")
      .min(6, "Mínimo de 6 caracteres!"),
    passwordConfirm: yup
      .string()
      .required("É obrigatório confirmar senha!")
      .min(6, "Mínimo de 6 caracteres!"),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const confirmPassword = watch("passwordConfirm");
  const password = watch("password");

  useEffect(() => {
    if (confirmPassword !== password) {
      setValidPassword(false);
    } else {
      setValidPassword(true);
    }
  }, [confirmPassword, password]);

  const save = async (data) => {
    setLoading(true);
    if (data.password === data.passwordConfirm) {
      try {
        await api.put(`auth/alterPass/${userId}`, data);
        setLoading(false);
        setSuccess(true);
        setMessage("Senha alterada com sucesso");
      } catch (e) {
        setLoading(false);
        setError(true);
        setMessage(e.response?.data?.message || "Erro, tente novamente mais tarde");
      }
    } else {
      setMessage(e.response?.data?.message || "As senhas precisam ser idênticas!");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitUpdate = async () => {
    const data = {
      image,
      name,
      email,
    };

     onUpdate({userId, data, setLoading, setSuccess, setError, setMessage, handleAvatar, setAvatar});
    let currentSession = { ...session };
    if (currentSession?.name && data.name) {
      currentSession.name = data.name;
      document.querySelector("#name-header").innerText = data.name;
    }
    if (currentSession.email && data.email) {
      currentSession.email = data.email;
    }
    localStorage.setItem("startdev-labs", JSON.stringify(currentSession));
  };

  setTimeout(() => {
    if(document) {
      document.querySelector("#avatar-temp").style.display = "flex";
    }
  }, 800)

  return(
    <>
      <Main>
        <Body>
          {loading && <Loading />}
          {!loading && (
            <form onSubmit={handleSubmitUpdate}>
            <Logo>Configurações do meu perfil</Logo>  
              <AvatarArea className="tile m-0 level">
              <div className="tile__icon">
                {
                  avatar ? (
                    <img 
                    className="avatar avatar--lg" 
                    src={avatar}
                    style={{backgroundColor: "transparent"}}
                    />
                  ) : (
                    <img 
                    className="avatar avatar--lg" 
                    id="avatar-temp"
                    src={AvatarImg}
                    style={{backgroundColor: "transparent", display: "none"}}
                    />
                  )
                }
              </div>           
              <div className="tile__container">
                <p className="tile__title m-0">{session?.name}</p>
                <p className="tile__subtitle m-0"><span>@{session?.username}</span></p>
              </div>
              </AvatarArea> 
        <div style={{ marginTop: "1rem" }} />  
        <Input
            text="Foto"
            name="image"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }} 
          />
        <div style={{ marginTop: "1rem" }} />  
        <Input 
            text="Nome completo" 
            name="name"
            type="text"
            value={name}
            onChange={onChange}
            style={{color: "#fff"}}
            />  
            <div style={{ marginTop: "1rem" }} /> 
        <Input 
            text="E-mail" 
            name="email"
            value={email}
            onChange={onChange}
            style={{color: "#fff"}}
            />  
        <div style={{ marginTop: "1rem" }} />
        <AlterPassword><a href="#alterPassword" >Alterar minha senha</a></AlterPassword>
        <div style={{ marginTop: "1rem" }} />
        <Button 
        label="Salvar alterações" 
        variant="info" 
        type="submit" 
        />
        </form>
          )}
        <AlterPasswordModal 
        className="modal normal modal-animated--zoom-in" 
        id="alterPassword"
        style={{  inset: 0,
        background: "rgba(0, 0, 0, 0.75)",}}>
        <a href="#searchModalDialog" className="modal-overlay close-btn" aria-label="Close"></a>
          <ModalContent 
          className="modal-content" 
          role="document" 
          style={{width: "500px", backgroundColor: "#1d1933", border: "1px solid #03357b"}}
          >
              <ModalHeader className="modal-header">
                <a href="#components" className="u-pull-right" aria-label="Close">
                  <span className="icon">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="times"
                      className="svg-inline--fa fa-times fa-w-11 fa-wrapper"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512"
                    >
                      <path
                        fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 
                        0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 
                        189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 
                        111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 
                        356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 
                        12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 
                        12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 
                        0-44.48L242.72 256z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </ModalHeader>
              <form onSubmit={handleSubmit(save)}>
                <ModalBody className="modal-body">
                  <h3 className="font-alt font-light u-text-center" style={{ color: "#a9a9a9" }}>
                    Alterar minha senha
                  </h3>
                  <div className="divider"></div>
                  <Input
                    text="Nova senha"
                    id="password"
                    name="password"
                    {...register("password")}
                    style={{ color: "#fff" }}
                  />
                  {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
                  <Input
                    text="Confirme sua nova senha"
                    id="inputPasswordConfirm"
                    {...register("passwordConfirm")}
                    style={{ color: "#fff" }}
                  />
                  {!validPassword && (
                    <p style={{ color: "#ff6d6dba" }}>As senhas inseridas são diferentes!</p>
                  )}
                </ModalBody>
                <ModalFooter className="modal-footer">
                  <a href="#" className="close-btn" aria-label="Close" ref={uploadInputRef} />
                  <Button
                    label="Salvar"
                    variant="info"
                    type="submit"
                    onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                  />
                </ModalFooter>
              </form>
            </ModalContent>
          </AlterPasswordModal>
        </Body>
      <Body> 
        <Logo>Meus amigos</Logo>  
        <div style={{display: "flex", flexDirection: "row", gap:"2em", marginBottom: "4em", 
         justifyContent: "center"}}>
          <MyInvitations>
            <Button
            label="Solicitações recebidas"
            variant="light"
            onClick={handleOpenAndCloseModalRequests}
            />
          </MyInvitations>
          <MyFriends>
            <Button
            label="Ver todos"
            variant="link"
            onClick={handleOpenAndCloseModalFriends}
            />
          </MyFriends>
        </div>
        <ModalViewAllFriends
            isOpen={isOpenModalFriends}
            onClose={handleOpenAndCloseModalFriends}
            allMyFriends={allMyFriends}
            setMessage={setMessage}
            setSuccess={setSuccess}
            setError={setError}
            setAllMyFriends={setAllMyFriends}
            setRevalidate={setRevalidate}
          />
          <ModalViewRequests
            isOpen={isOpenModalRequests}
            onClose={handleOpenAndCloseModalRequests}
            receivedFriendshipRequests={receivedFriendshipRequests}
            setReceivedFriendshipRequests={setReceivedFriendshipRequests}
            setError={setError}
            setSuccess={setSuccess}
            setRevalidate={setRevalidate}
            setMessage={setMessage}
          />
        <Logo>Encontrar mais pessoas</Logo> 
        <LabelSearch>
          <SearchIcon/>
        <SearchInput 
        placeholder="Procurar"
        value={nameToSearch}
        onChange={(e) => setNameToSearch(e.target.value)}
        />
        </LabelSearch>
        <div style={{ marginTop: "40px" }} />
        <CardsContainer>
        {usersBySearch && receivedFriendshipRequests && 
        <FriendCard 
        usersBySearch={usersBySearch}
        sentFriendshipRequests={sentFriendshipRequests}
        setSentFriendshipRequests={setSentFriendshipRequests}
        setRevalidate={setRevalidate}
        allMyFriends={allMyFriends}
        />}
        </CardsContainer>
      </Body>
    </Main>
    {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default Profile;
