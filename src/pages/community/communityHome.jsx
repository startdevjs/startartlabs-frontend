import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LaptopGirl from "../../assets/laptop-girl.png";
import { getAllLessions } from "../projects/functions/getAllLessions";
import { getAllProjects } from "../projects/functions/getAllProjects";
import { getForums } from "./functions/getForums";
import {
  CardByProject,
  CardImage,
  Container,
  ForumHeaderContainer,
  ForumHeaderContent,
  ForumHeaderImgContainer,
  ForumHeaderSubtitle,
  ForumHeaderTitle,
  W50,
  W50End,
  CardByProjectContainer,
} from "./styles";

const CommunityHome = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState();
  const [lessions, setLessions] = useState([]);
  const [page, setPage] = useState(1);
  const [forumInfos, setForumInfos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllProjects(setLoading, setProjects, skip, take);
  }, [page]);

  useEffect(() => {
    getForums(setLoading, setForumInfos);
  }, []);

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;
    getAllLessions(setLoading, setLessions, currentProject, skip, take);
  }, [currentProject]);

  return (
    <>
      <Container>
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
          <W50End></W50End>
        </ForumHeaderContainer>
        <CardByProjectContainer>
          {projects?.projects?.map((project) => (
            <>
              <CardByProject
                key={project?.id}
                onClick={() => navigate(`/community/project/${project?.id}`)}
              >
                <div style={{ flexDirection: "column" }}>
                  <h6>Tópicos relacionados ao projeto:</h6>
                  <h4>{project?.name}</h4>
                </div>
                <CardImage
                  image={
                    project?.image !== null && project?.image !== undefined && project?.image !== ""
                      ? `${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${project?.image}`
                      : ""
                  }
                ></CardImage>
              </CardByProject>
            </>
          ))}
        </CardByProjectContainer>
      </Container>
    </>
  );
};

export default CommunityHome;
