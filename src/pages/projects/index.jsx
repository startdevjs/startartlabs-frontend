import { useEffect, useState } from "react";
import { getAllLessions } from "./functions/getAllLessions";
import { getAllProjects } from "./functions/getAllProjects";
import { getLessionById } from "./functions/getLessionById";
import { getProjectById } from "./functions/getProjectById";
import Loading from "../../components/loading";
import useQuery from "../../hooks/useQuery";
import {
  Container,
  Content,
  ProjectTitle,
  ProjectVideoContainer,
  ProjectVideo,
  ProjectDescription,
  ProjectSideBarList,
  ProjectSideBarListContent,
  ProjectSideBarListItem,
  ProjectSideBarListItemTitle,
  IconPlay,
  IconChallenge,
  ProjectVideoPlayer,
  ProjectSideBarHeader,
  ProjectSideBarHeaderTitle,
  ProjectImg,
  ProjectFooter,
} from "./styles";
import Pagination from "../../components/pagination";
import { Link } from "react-router-dom";

const Projects = () => {
  const [pageProject, setPageProject] = useState(1);
  const [loadingProject, setLoadingProject] = useState(false);
  const [projects, setProjects] = useState([]);

  const [pageLession, setPageLession] = useState(1);
  const [loadingLession, setLoadingLession] = useState(false);
  const [lessions, setLessions] = useState([]);

  const [loadingLessionActive, setLoadingLessionActive] = useState(false);
  const [activeLession, setActiveLession] = useState([]);

  const [loadingProjectActive, setLoadingProjectActive] = useState(false);
  const [activeProject, setActiveProject] = useState([]);

  const query = useQuery();
  const activeLessionId = query.get("activeLessionId");
  const videoUrl = query.get("video");
  const challengesUrl = query.get("challenges");
  const activeProjectId = query.get("activeProjectId");

  useEffect(() => {
    const skip = (pageProject - 1) * 20;
    const take = 20;

    getAllProjects(setLoadingProject, setProjects, skip, take);
  }, [pageProject]);

  useEffect(() => {
    const skip = (pageLession - 1) * 20;
    const take = 20;

    getAllLessions(setLoadingLession, setLessions, skip, take);
  }, [pageLession]);

  useEffect(() => {
    if (!activeLessionId) {
    } else {
      getLessionById(activeLessionId, setLoadingLessionActive, setActiveLession);
    }
  }, [activeLessionId]);

  useEffect(() => {
    if (!activeProjectId) {
    } else {
      getProjectById(activeProjectId, setLoadingProjectActive, setActiveProject);
    }
  }, [activeProjectId]);

  return (
    <>
      {loadingProject ? <Loading /> : <></>}
      {loadingLession ? <Loading /> : <></>}

      {!loadingProject && !loadingLession ? (
        <Container>
          <Content>
            {loadingLessionActive ? <Loading /> : <></>}
            {loadingProjectActive ? <Loading /> : <></>}

            {!loadingLessionActive && !loadingProjectActive ? (
              <ProjectVideoContainer>
                <ProjectTitle>
                  {videoUrl == "true" && activeLession?.name}
                  {challengesUrl == "true" && activeProject?.name}
                </ProjectTitle>

                <ProjectVideo>
                  {videoUrl == "true" && (
                    <>
                      {activeLession?.video ? (
                        <ProjectVideoPlayer controls>
                          <source src={activeLession?.video} type="video/mp4"></source>
                        </ProjectVideoPlayer>
                      ) : activeLession?.image ? (
                        <ProjectImg src={activeLession?.image} alt="Imagem da aula" />
                      ) : (
                        <ProjectImg
                          src="/assets/img/empty.jpg"
                          alt="Nenhuma imagem ou vídeo foi encontrada"
                        />
                      )}
                    </>
                  )}

                  {challengesUrl == "true" && (
                    <>
                      {console.log("teste")}
                      {activeProject?.image ? (
                        <ProjectImg src={activeProject?.image} alt="Imagem do desafio" />
                      ) : (
                        <ProjectImg
                          src="/assets/img/empty.jpg"
                          alt="Nenhuma imagem ou vídeo foi encontrada"
                        />
                      )}
                    </>
                  )}

                  {!activeLession && !activeProject ? "Nenhuma aula ou desafio foi encontrada" : ""}
                </ProjectVideo>

                <ProjectDescription>
                  {videoUrl == "true" && activeLession?.description}
                  {challengesUrl == "true" && activeProject?.description}
                </ProjectDescription>
              </ProjectVideoContainer>
            ) : (
              <></>
            )}

            <ProjectSideBarList>
              <ProjectSideBarHeader>
                <ProjectSideBarHeaderTitle
                  active={
                    videoUrl == "true"
                      ? true
                      : videoUrl == "false" ||
                        (videoUrl == null && challengesUrl == "false") ||
                        challengesUrl == null
                      ? true
                      : false
                  }
                >
                  <Link to="?video=true">Vídeos</Link>
                </ProjectSideBarHeaderTitle>

                <ProjectSideBarHeaderTitle active={challengesUrl == "true" ? true : false}>
                  <Link to="?challenges=true">Desafios</Link>
                </ProjectSideBarHeaderTitle>
              </ProjectSideBarHeader>

              <ProjectSideBarListContent>
                {videoUrl == "true" &&
                  lessions?.lessions?.map((lession) => (
                    <Link
                      style={
                        lession?.id == activeLessionId ? { color: "#2a7ae9" } : { color: "#fff" }
                      }
                      to={`?video=${true}&activeLessionId=${lession?.id}`}
                    >
                      <ProjectSideBarListItem>
                        <ProjectSideBarListItemTitle>
                          <p>{lession?.name}</p>
                          {lession?.type === 1 && <IconPlay />}
                          {lession?.type === 2 && <IconChallenge />}
                        </ProjectSideBarListItemTitle>
                      </ProjectSideBarListItem>
                    </Link>
                  ))}

                {challengesUrl == "true" &&
                  projects?.projects?.map((project) => (
                    <Link
                      style={
                        project?.id == activeProjectId ? { color: "#2a7ae9" } : { color: "#fff" }
                      }
                      to={`?challenges=${true}&activeProjectId=${project?.id}`}
                    >
                      <ProjectSideBarListItem>
                        <ProjectSideBarListItemTitle>
                          <p>{project?.name}</p>
                          <IconChallenge />
                        </ProjectSideBarListItemTitle>
                      </ProjectSideBarListItem>
                    </Link>
                  ))}
              </ProjectSideBarListContent>

              <ProjectFooter>
                {videoUrl == "true" && (
                  <>
                    {lessions?.lessions?.length >= 20 && (
                      <Pagination
                        onPageChange={setPageLession}
                        totalCountOfRegisters={lessions?.lessions?.total}
                        currentPage={pageLession}
                        registersPerPage={20}
                      />
                    )}
                  </>
                )}

                {challengesUrl == "true" && (
                  <>
                    {projects?.projects?.length >= 20 && (
                      <Pagination
                        onPageChange={setPageProject}
                        totalCountOfRegisters={projects?.projects?.total}
                        currentPage={pageProject}
                        registersPerPage={20}
                      />
                    )}
                  </>
                )}
              </ProjectFooter>
            </ProjectSideBarList>
          </Content>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Projects;
