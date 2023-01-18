import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import LaptopGirl from "../../assets/laptop-girl.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Container,
  TopicCard,
  CardHeader,
  CardHeaderDate,
  ContainerButtons,
  CardContent,
  AvatarArea,
  Avatar,
  AvatarImgContainer,
  Author,
  AuthorName,
  AuthorUsername,
  AuthorShield,
  CardTextContent,
  ForumHeaderContainer,
  ForumHeaderImgContainer,
  ForumHeaderContent,
  ForumHeaderTitle,
  ForumHeaderSubtitle,
  ButtonGoBackContainer,
  ButtonGoBack,
  ForumHeaderButtonContainer,
  ButtonCreateTopic,
  W50,
  W50End,
} from "./styles";
import { getRepliesByTopic } from "./functions/getRepliesByTopic";
import { getTopic } from "./functions/getTopic";
import ModalReplyTopic from "../../components/community/modalReplyTopic";
import { Loading } from "../../components";
import Pagination from "../../components/pagination";
import { getForums } from "./functions/getForums";

const CommunityPost = () => {
  const [page, setPage] = useState(1);
  const [replies, setReplies] = useState([]);
  const [topic, setTopic] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [forumInfos, setForumInfos] = useState([]);

  const [isOpenModalReplyTopic, setIsOpenModalReplyTopic] = useState(false);
  const [closeModalReplyTopic, setCloseModalReplyTopic] = useState(false);

  const handleOpenAndCloseModalReplyTopic = () => {
    setIsOpenModalReplyTopic(!isOpenModalReplyTopic);
    setCloseModalReplyTopic(!closeModalReplyTopic);
  };

  const { id } = useParams();

  useEffect(() => {
    const skip = (page - 1) * 15;
    const take = 15;

    getRepliesByTopic(setLoading, setReplies, id, skip, take);
  }, [page, isCreated]);

  useEffect(() => {
    getTopic(setLoading, setTopic, id);
  }, [id]);

  useEffect(() => {
    getForums(setLoading, setForumInfos);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <TopicCard>
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
                  <ForumHeaderTitle>{forumInfos?.forumInfos?.reply_title}</ForumHeaderTitle>
                  <ForumHeaderSubtitle>
                    {forumInfos?.forumInfos?.reply_subtitle}
                  </ForumHeaderSubtitle>
                </ForumHeaderContent>
              </W50>

              <W50End>
                <ForumHeaderButtonContainer>
                  <ButtonCreateTopic onClick={handleOpenAndCloseModalReplyTopic}>
                    Responder tópico
                  </ButtonCreateTopic>
                </ForumHeaderButtonContainer>
              </W50End>
            </ForumHeaderContainer>
          </TopicCard>

          <TopicCard>
            <CardHeader borderTop="1rem">
              <CardHeaderDate>
                {topic?.createdAt
                  ? format(new Date(topic?.createdAt), "dd MMMM yyyy HH:mm", {
                      locale: ptBR,
                    })
                  : ""}
              </CardHeaderDate>
              {/* <ContainerButtons>
              <a>Reportar</a>
            </ContainerButtons> */}
            </CardHeader>

            <CardContent borderBottom="0">
              <AvatarArea>
                <Avatar>
                  <div className="tile__icon">
                    <figure className="avatar avatar--lg">
                      <img
                        src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${
                          topic?.user?.avatar
                        }`}
                        alt={topic?.user?.name}
                      />
                    </figure>
                  </div>
                </Avatar>

                <Author>
                  <AuthorName>{topic?.user?.name}</AuthorName>
                  <AuthorUsername>@{topic?.user?.username}</AuthorUsername>

                  <AuthorShield
                    bgColor={topic?.user?.id === topic?.user?.id ? "#2a7ae9" : "#7750f8"}
                  >
                    {topic?.user?.id === topic?.user?.id ? "Criador" : "Participante"}
                  </AuthorShield>
                </Author>
              </AvatarArea>

              <CardTextContent
                dangerouslySetInnerHTML={{
                  __html: topic?.description,
                }}
              ></CardTextContent>
            </CardContent>
          </TopicCard>

          {replies?.replys?.map((item, i) => (
            <TopicCard key={i}>
              <CardHeader borderTop={i + 1 === 0 ? "1rem" : "0"}>
                <CardHeaderDate>
                  {format(new Date(item?.createdAt), "dd MMMM yyyy HH:mm", {
                    locale: ptBR,
                  })}
                </CardHeaderDate>
                {/* <ContainerButtons>
                <a>Reportar</a>
              </ContainerButtons> */}
              </CardHeader>

              <CardContent borderBottom={i + 1 === replies?.replys?.length ? "1rem" : "0"}>
                <AvatarArea>
                  <Avatar>
                    <div className="tile__icon">
                      <figure className="avatar avatar--lg">
                        <img
                          src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${
                            item?.user?.avatar
                          }`}
                          alt={item?.user?.name}
                        />
                      </figure>
                    </div>
                  </Avatar>

                  <Author>
                    <AuthorName>{item?.user?.name}</AuthorName>
                    <AuthorUsername>@{item?.user?.username}</AuthorUsername>

                    <AuthorShield
                      bgColor={item?.user?.id === topic?.user?.id ? "#2a7ae9" : "#7750f8"}
                    >
                      {item?.user?.id === topic?.user?.id ? "Criador" : "Participante"}
                    </AuthorShield>
                  </Author>
                </AvatarArea>

                <CardTextContent
                  dangerouslySetInnerHTML={{
                    __html: item?.description,
                  }}
                ></CardTextContent>
              </CardContent>
            </TopicCard>
          ))}

          {replies?.replys?.length >= 15 || page >= 2 ? (
            <Pagination
              onPageChange={setPage}
              totalCountOfRegisters={replies?.total}
              currentPage={page}
              registersPerPage={15}
            />
          ) : (
            <></>
          )}
        </Container>
      )}

      <svg height="0" width="0">
        <defs>
          <clipPath id="svgPath">
            <path
              fill="#2a7ae9"
              stroke="#000000"
              stroke-width="1.5794"
              stroke-miterlimit="10"
              d="M93.0139721,22.6 L56.6866267,1.8 C54.5908184,0.6 52.1956088,0 49.9001996,0 C47.6047904,0 45.2095808,0.6 43.1137725,1.8 L6.78642715,22.6 C2.59481038,25 0,29.4 0,34.2 L0,75.8 C0,80.6 2.59481038,85 6.78642715,87.4 L43.2135729,108.2 C45.3093812,109.4 47.6047904,110 50,110 C52.2954092,110 54.6906188,109.4 56.7864271,108.2 L93.2135729,87.4 C97.4051896,85 100,80.6 100,75.8 L100,34.2 C99.8003992,29.4 97.2055888,25 93.0139721,22.6 L93.0139721,22.6 Z"
            />
          </clipPath>
        </defs>
      </svg>

      <ModalReplyTopic
        isOpen={isOpenModalReplyTopic}
        onClose={handleOpenAndCloseModalReplyTopic}
        id={id}
        setLoading={setLoading}
        setIsCreated={setIsCreated}
        isCreated={isCreated}
      />
    </>
  );
};

export default CommunityPost;
