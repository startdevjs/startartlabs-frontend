import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTopics } from "./functions/getAllTopics";
import LaptopGirl from "../../assets/laptop-girl.png";
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
} from "./styles";

const Community = () => {
  const [page, setPage] = useState(1);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllTopics(setLoading, setTopics, skip, take);
  }, [page]);

  return (
    <>
      <Container>
        <ForumHeaderContainer>
          <ForumHeaderImgContainer>
            <img src={LaptopGirl} alt="Forum" />
          </ForumHeaderImgContainer>

          <ForumHeaderContent>
            <ForumHeaderTitle>Forum</ForumHeaderTitle>
            <ForumHeaderSubtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod, voluptate.
            </ForumHeaderSubtitle>
          </ForumHeaderContent>
        </ForumHeaderContainer>

        <CommunityTopicContent borderTop={"1rem"} par={true}>
          <TitleCommunityTopicStatic>Titulo do tópico</TitleCommunityTopicStatic>

          <NumberReplies>Comentários</NumberReplies>

          <AvatarCommunityTopicStatic>Autor</AvatarCommunityTopicStatic>
        </CommunityTopicContent>

        {topics?.topics?.map((item, i) => (
          <CommunityTopicContent
            key={i}
            borderBottom={i + 1 === topics?.topics?.length ? "1rem" : "0"}
            // borderTop={i === 0 ? "1rem" : "0"}
            par={(i + 1) % 2 === 0 ? true : false}
          >
            <TitleCommunityTopicContainer>
              <Link to={`/community/post/${item?.id}`}>
                <TitleCommunityTopic>{item?.title}</TitleCommunityTopic>
                <p className="tile__subtitle m-0">
                  {/* // date format (date FNS) -> 13 sexta 2023 12:00 */}

                  {format(new Date(item?.createdAt), "dd MMMM yyyy HH:mm", {
                    locale: ptBR,
                  })}
                </p>
              </Link>
            </TitleCommunityTopicContainer>

            <NumberReplies>100</NumberReplies>

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
        ))}
      </Container>
    </>
  );
};

export default Community;
