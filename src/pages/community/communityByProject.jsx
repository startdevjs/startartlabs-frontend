import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalCreateTopic from "../../components/community/modalCreateTopic";
import LaptopGirl from "../../assets/laptop-girl.png";
import { Loading } from "../../components";
import Pagination from "../../components/pagination";
import { getForums } from "./functions/getForums";
import { getTopicsByProject } from "./functions/getTopicsByProject";
import { getAllLessions } from "../projects/functions/getAllLessions";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Container,
  ForumHeaderContainer,
  ForumHeaderImgContainer,
  ForumHeaderContent,
  ForumHeaderTitle,
  ForumHeaderSubtitle,
  CommunityTopicContent,
  TitleCommunityTopicContainer,
  TitleCommunityTopic,
  NumberReplies,
  AvatarCommunityTopic,
  TitleCommunityTopicStatic,
  AvatarCommunityTopicStatic,
  ForumHeaderButtonContainer,
  ButtonCreateTopic,
  W50,
  W50End,
  ButtonGoBackContainer,
  ButtonGoBack,
} from "./styles";

const CommunityByProject = () => {
  const [page, setPage] = useState(1);
  const [topicsByProject, setTopicsByProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lessions, setLessions] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const {id} = useParams()
  const [forumInfos, setForumInfos] = useState([]);
  const [isOpenModalCreateTopic, setIsOpenModalCreateTopic] = useState(false);
  const [closeModalCreateTopic, setCloseModalCreateTopic] = useState(false);

  const handleOpenAndCloseModalCreateTopic = () => {
    setIsOpenModalCreateTopic(!isOpenModalCreateTopic);
    setCloseModalCreateTopic(!closeModalCreateTopic);
  };

  useEffect(() => {
    const skip = (page - 1) * 15;
    const take = 15;
    getTopicsByProject({setLoading, setTopicsByProject, id});
  }, [page, isCreated, id]);

  useEffect(() => {
    getForums(setLoading, setForumInfos);
  }, []);

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;
    getAllLessions(setLoading, setLessions, id, skip, take);
}, [id])

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <ButtonGoBackContainer>
              <Link to={-1}>
                <ButtonGoBack>
                  <AiOutlineArrowLeft />
                  Voltar
                </ButtonGoBack>
              </Link>
            </ButtonGoBackContainer>
          <ForumHeaderContainer post={true}>
            <W50>
              <ForumHeaderImgContainer>
                <img src={LaptopGirl} alt="Forum" />
              </ForumHeaderImgContainer>

              <ForumHeaderContent>
                <ForumHeaderTitle>{forumInfos?.forumInfos?.topic_title}</ForumHeaderTitle>
                <ForumHeaderSubtitle>{forumInfos?.forumInfos?.topic_subtitle}</ForumHeaderSubtitle>
              </ForumHeaderContent>
            </W50>

            <W50End>
              <ForumHeaderButtonContainer>
                <ButtonCreateTopic onClick={handleOpenAndCloseModalCreateTopic}>
                  Criar tópico
                </ButtonCreateTopic>
              </ForumHeaderButtonContainer>
            </W50End>
          </ForumHeaderContainer>
          {
            Number(topicsByProject?.topics?.length) > 0 ? (
              <CommunityTopicContent borderTop={"1rem"} par={true}>
              <TitleCommunityTopicStatic>Titulo do tópico</TitleCommunityTopicStatic>
  
              <NumberReplies>Comentários</NumberReplies>
  
              <AvatarCommunityTopicStatic>Autor</AvatarCommunityTopicStatic>
            </CommunityTopicContent>
            ) : (
            <h6>Ainda não há tópicos relacionados a este desafio.</h6>
            )
          }

          {
          Number(topicsByProject?.topics?.length) > 0 &&
          (topicsByProject?.topics?.map((item, i) => (
            <CommunityTopicContent
              key={i}
              borderBottom={i + 1 === topicsByProject?.topics?.length ? "1rem" : "0"}
              par={(i + 1) % 2 === 0 ? true : false}
            >
              <TitleCommunityTopicContainer>
                <Link to={`/community/post/${item?.id}`}>
                  <TitleCommunityTopic>{item?.title}</TitleCommunityTopic>
                  <p className="tile__subtitle m-0">
                    {item?.createdAt
                      ? format(new Date(item?.createdAt), "dd MMMM yyyy HH:mm", {
                          locale: ptBR,
                        })
                      : ""}
                  </p>
                </Link>
              </TitleCommunityTopicContainer>

              <NumberReplies>{item?._count?.Reply}</NumberReplies>

              <AvatarCommunityTopic>
                <div className="tile m-0 level">
                  <div className="tile__icon">
                    <figure className="avatar avatar--sm">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${
                          item?.user?.avatar
                        }`}
                        alt={item?.user?.name}
                      />
                    </figure>
                  </div>
                  <div className="tile__container">
                    <p className="tile__title m-0">{item?.user?.name}</p>
                    <p className="tile__subtitle m-0">
                      <a href="!#">@{item?.user?.username}</a>
                    </p>
                  </div>
                </div>
              </AvatarCommunityTopic>
            </CommunityTopicContent>
          )))}

          {/* {topicsByProject?.topics?.length >= 15 || page >= 2 ? (
            <Pagination
              onPageChange={setPage}
              totalCountOfRegisters={topicsByProject?.total}
              currentPage={page}
              registersPerPage={15}
            />
          ) : (
            <></>
          )} */}
        </Container>
      )}

      <ModalCreateTopic
        isOpen={isOpenModalCreateTopic}
        onClose={handleOpenAndCloseModalCreateTopic}
        // id={id}
        setLoading={setLoading}
        setIsCreated={setIsCreated}
        isCreated={isCreated}
        isFilterByProject
        lessionByProject={lessions}
      />
    </>
  );
};

export default CommunityByProject;
