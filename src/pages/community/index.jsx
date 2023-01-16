import { useState } from "react";
import { useParams } from "react-router-dom";
import ModalCreateTopic from "../../components/community/modalCreateTopic";
import {CommunityContainer, CommunityTitle, Header, ButtonCreate, IconPlus} from "./styles"

const Community = () => {
    const [isOpenModalCreateTopic, setIsOpenModalCreateTopic] = useState(false);
    const [closeModalCreateTopic, setCloseModalCreateTopic] = useState(false);
    const { id } = useParams();

    const handleOpenAndCloseModalCreateTopic = () => {
        setIsOpenModalCreateTopic(!isOpenModalCreateTopic);
        setCloseModalCreateTopic(!closeModalCreateTopic);
      };   

return (
    <>
    <CommunityTitle>Comunidade</CommunityTitle>
        <CommunityContainer>
            <Header>
                <span>Crie e visualize tópicos relacionados a este desafio</span>
                <ButtonCreate
                onClick={handleOpenAndCloseModalCreateTopic}
                > <IconPlus/> Criar discussão</ButtonCreate>
            </Header>
        </CommunityContainer>
        <ModalCreateTopic
        isOpen={isOpenModalCreateTopic}
        onClose={handleOpenAndCloseModalCreateTopic}
        id={id}
        />
    </>
)}

export default Community