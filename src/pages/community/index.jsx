import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getAllTopics } from "./functions/getAllTopics";
import { getTotalRepliesByTopic } from "./functions/getTotalRepliesByTopic";
import {
  Container,
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

  const array = [1, 2, 3];

  return (
    <>
      <Container>
        <CommunityTopicContent borderTop={"1rem"} par={true}>
          <TitleCommunityTopicStatic>Titulo do tópico</TitleCommunityTopicStatic>

          <NumberReplies>Comentários</NumberReplies>

          <AvatarCommunityTopicStatic>Autor</AvatarCommunityTopicStatic>
        </CommunityTopicContent>

        {topics?.topics?.map((item, i) => (
          <CommunityTopicContent
            key={i}
            borderBottom={i + 1 === array?.length ? "1rem" : "0"}
            // borderTop={i === 0 ? "1rem" : "0"}
            par={(i + 1) % 2 === 0 ? true : false}
          >
            <TitleCommunityTopicContainer>
              <TitleCommunityTopic>{item?.title}</TitleCommunityTopic>
              <p className="tile__subtitle m-0">
                {/* // date format (date FNS) -> 13 sexta 2023 12:00 */}

                {format(new Date(item?.createdAt), "dd MMMM yyyy HH:mm", {
                  locale: ptBR,
                })}
              </p>
            </TitleCommunityTopicContainer>

            <NumberReplies>100</NumberReplies>

            <AvatarCommunityTopic>
              <div className="tile m-0 level">
                <div className="tile__icon">
                  <figure className="avatar avatar--sm" data-text="Jz"></figure>
                </div>
                <div className="tile__container">
                  <p className="tile__title m-0">Jenelle Zaynab</p>
                  <p className="tile__subtitle m-0">
                    <a href="!#">@jenelle_zaynab</a>
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
