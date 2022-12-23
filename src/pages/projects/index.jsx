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
  ProjectVideoPlayer,
  ProjectSideBarHeader,
  ProjectSideBarHeaderTitle,
  ProjectImg,
  ProjectFooter,
} from "./styles";
import Pagination from "../../components/pagination";

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

  const [empty, setEmpty] = useState(false);

  // const [activeLessionId, setActiveLessionId] = useState(null);
  const [activeMenu, setActiveMenu] = useState({
    videos: true,
    challenges: false,
  });

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
      setEmpty(true);
      // setActiveLession(lessions?.lessions?.[0]);
    } else {
      getLessionById(activeLessionId, setLoadingLessionActive, setActiveLession);
      setEmpty(false);
    }
  }, [activeLessionId]);

  useEffect(() => {
    if (!activeProjectId) {
      setEmpty(true);
      // setActiveLession(projects?.projects?.[0]);
    } else {
      getProjectById(activeProjectId, setLoadingProjectActive, setActiveProject);
      setEmpty(false);
    }
  }, [activeProjectId]);

  return (
    <>
      {loadingProject ? <Loading /> : <></>}
      {loadingLession ? <Loading /> : <></>}

      {!loadingProject && !loadingLession ? (
        <Container>
          <Content>
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
                  <a
                    href="?video=true"
                    onClick={() => {
                      setActiveMenu({ videos: true, challenges: false });
                    }}
                  >
                    Vídeos
                  </a>
                </ProjectSideBarHeaderTitle>

                <ProjectSideBarHeaderTitle active={challengesUrl == "true" ? true : false}>
                  <a
                    href="?challenges=true"
                    onClick={() => {
                      setActiveMenu({ videos: false, challenges: true });
                    }}
                  >
                    Desafios
                  </a>
                </ProjectSideBarHeaderTitle>
              </ProjectSideBarHeader>

              <ProjectSideBarListContent>
                {videoUrl == "true" &&
                  lessions?.lessions?.map((lession) => (
                    <a
                      style={
                        lession?.id == activeLessionId ? { color: "#2a7ae9" } : { color: "#fff" }
                      }
                      href={`?video=${true}&activeLessionId=${lession?.id}`}
                    >
                      <ProjectSideBarListItem>
                        <ProjectSideBarListItemTitle>
                          <p>{lession?.name}</p>
                          <IconPlay />
                        </ProjectSideBarListItemTitle>
                      </ProjectSideBarListItem>
                    </a>
                  ))}

                {challengesUrl == "true" &&
                  projects?.projects?.map((project) => (
                    <a
                      style={
                        project?.id == activeProjectId ? { color: "#2a7ae9" } : { color: "#fff" }
                      }
                      href={`?challenges=${true}&activeProjectId=${project?.id}`}
                    >
                      <ProjectSideBarListItem>
                        <ProjectSideBarListItemTitle>
                          <p>{project?.name}</p>
                          <IconPlay />
                        </ProjectSideBarListItemTitle>
                      </ProjectSideBarListItem>
                    </a>
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
