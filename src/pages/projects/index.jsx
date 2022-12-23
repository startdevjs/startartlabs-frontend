import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllLessions } from "./functions/getAllLessions";
import { getAllProjects } from "./functions/getAllProjects";
import { getLessionById } from "./functions/getLessionById";
import { getProjectById } from "./functions/getProjectById";
import { sendProject } from "./functions/sendProject";
import Pagination from "../../components/pagination";
import Input from "../../components/input";
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
  SendProjectFooter,
  ButtonSendProject,
} from "./styles";
import { getProjectByLessionId } from "./functions/getProjectByLessionId";

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

  const [linkProject, setLinkProject] = useState("");
  const [branchProject, setBranchProject] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [stateProjectByLessionId, setStateProjectByLessionId] = useState({});

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

  const onChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "linkProject":
        setLinkProject(value);
        break;
      case "branchProject":
        setBranchProject(value);
        break;
      default:
        break;
    }
  };

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

                <SendProjectFooter>
                  {videoUrl == "true" && activeLession?.type === 2 ? (
                    <>
                      <Input
                        text="Link do projeto"
                        name="linkProject"
                        type="text"
                        placeholder="Digite o link do projeto"
                        value={linkProject}
                        onChange={onChange}
                      />

                      <Input
                        text="Em qual branch está o projeto?"
                        name="branchProject"
                        type="text"
                        placeholder="Digite a branch do projeto"
                        value={branchProject}
                        onChange={onChange}
                      />

                      <ButtonSendProject
                        text="Enviar"
                        type="button"
                        onClick={() => {
                          const data = {
                            link: linkProject,
                            branch: branchProject,
                            lessionId: activeLessionId,
                          };

                          sendProject(data, setLoading, setSuccess, setError, setMessage);
                        }}
                      >
                        {loading ? <Loading /> : "Enviar"}
                      </ButtonSendProject>
                    </>
                  ) : (
                    <></>
                  )}

                  {challengesUrl == "true" && (
                    <>
                      <Input
                        text="Link do projeto"
                        name="linkProject"
                        type="text"
                        placeholder="Digite o link do projeto"
                        value={linkProject}
                        onChange={onChange}
                      />

                      <Input
                        text="Em qual branch está o projeto?"
                        name="branchProject"
                        type="text"
                        placeholder="Digite a branch do projeto"
                        value={branchProject}
                        onChange={onChange}
                      />

                      <ButtonSendProject
                        text="Enviar"
                        type="button"
                        onClick={() => {
                          const data = {
                            link: linkProject,
                            branch: branchProject,
                            lessionId: Number(activeLessionId),
                          };

                          sendProject(
                            data,
                            setLoading,
                            setSuccess,
                            setError,
                            setMessage,
                            setLinkProject,
                            setBranchProject,
                          );
                        }}
                      >
                        {loading ? <Loading /> : "Enviar"}
                      </ButtonSendProject>
                    </>
                  )}
                </SendProjectFooter>
              </ProjectVideoContainer>
            ) : (
              <></>
            )}

            <ProjectSideBarList>
              <ProjectSideBarHeader>
                <ProjectSideBarHeaderTitle active={true} style={{ cursor: "default" }}>
                  <Link>Vídeos e Desafios</Link>
                </ProjectSideBarHeaderTitle>
                {/* 
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
                </ProjectSideBarHeaderTitle> */}
              </ProjectSideBarHeader>

              <ProjectSideBarListContent>
                {
                  //videoUrl == "true" &&
                  lessions?.lessions?.map((lession) => {
                    return (
                      <>
                        <Link
                          style={
                            lession?.id == activeLessionId
                              ? { color: "#2a7ae9" }
                              : { color: "#fff" }
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

                        <Link
                          style={
                            lession?.projectId == activeProjectId
                              ? { color: "#2a7ae9" }
                              : { color: "#fff" }
                          }
                          to={`?challenges=${true}&activeProjectId=${lession?.projectId}`}
                        >
                          <ProjectSideBarListItem>
                            <ProjectSideBarListItemTitle>
                              <p>
                                {
                                  projects?.projects?.filter(
                                    (project) => project?.id == lession?.projectId,
                                  )[0]?.name
                                }
                              </p>
                              <IconChallenge />
                            </ProjectSideBarListItemTitle>
                          </ProjectSideBarListItem>
                        </Link>
                      </>
                    );
                  })
                }

                {/* {challengesUrl == "true" &&
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
                  ))} */}
              </ProjectSideBarListContent>

              <ProjectFooter>
                {lessions?.lessions?.length >= 20 && (
                  <Pagination
                    onPageChange={setPageLession}
                    totalCountOfRegisters={lessions?.lessions?.total}
                    currentPage={pageLession}
                    registersPerPage={20}
                  />
                )}
                {/* {videoUrl == "true" && (
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
                )} */}
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
