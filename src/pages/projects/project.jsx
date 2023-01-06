import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllLessions } from "./functions/getAllLessions";
import { getAllProjects } from "./functions/getAllProjects";
import { getLessionById } from "./functions/getLessionById";
import { getProjectById } from "./functions/getProjectById";
import { sendProject } from "./functions/sendProject";
import Pagination from "../../components/pagination";
import Input from "../../components/input";
import Loading from "../../components/loading";
import Toast from "../../components/toast";
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
  ButtonSendProjectContainer,
  ContainerEmpty,
  TitleEmpty,
  DescriptionEmpty,
  ButtonEmpty,
} from "./styles";

const Project = () => {
  const [pageLession, setPageLession] = useState(1);
  const [loadingLession, setLoadingLession] = useState(false);
  const [lessions, setLessions] = useState([]);

  const [loadingLessionActive, setLoadingLessionActive] = useState(false);
  const [activeLession, setActiveLession] = useState([]);

  const [linkProject, setLinkProject] = useState("");
  const [branchProject, setBranchProject] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { projectId } = useParams();

  const query = useQuery();
  const activeLessionId = query.get("activeLessionId");

  useEffect(() => {
    const skip = (pageLession - 1) * 20;
    const take = 20;

    getAllLessions(setLoading, setLessions, projectId, skip, take);
  }, [pageLession]);

  useEffect(() => {
    if (!activeLessionId) {
    } else {
      getLessionById(activeLessionId, setLoadingLessionActive, setActiveLession);
    }
  }, [activeLessionId]);

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

  if (lessions?.lessions?.length === 0) {
    return (
      <ContainerEmpty>
        <TitleEmpty>Nenhuma aula ou desafio foi encontrada</TitleEmpty>

        <DescriptionEmpty>
          <p>
            Nenhuma aula ou desafio foi encontrada para esse projeto. Explore outros dos nossos
            projetos.
          </p>
        </DescriptionEmpty>

        <Link to="/projects">
          <ButtonEmpty>
            <a>Explore outros projetos</a>
          </ButtonEmpty>
        </Link>
      </ContainerEmpty>
    );
  }

  return (
    <>
      {loadingLession ? <Loading /> : <></>}

      {!loadingLession ? (
        <Container>
          <Content>
            {loadingLessionActive ? <Loading /> : <></>}

            {!loadingLessionActive ? (
              <ProjectVideoContainer>
                <ProjectTitle>{activeLession?.name}</ProjectTitle>

                {activeLession?.video !== null &&
                activeLession?.video !== undefined &&
                activeLession?.video !== "" ? (
                  <ProjectVideo>
                    <ProjectVideoPlayer
                      src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/videos/${
                        activeLession?.video
                      }`}
                      controls
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </ProjectVideo>
                ) : (
                  <></>
                )}

                {activeLession?.image !== null &&
                activeLession?.image !== undefined &&
                activeLession?.image !== "" ? (
                  <ProjectVideo>
                    <ProjectImg
                      src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${
                        activeLession?.image
                      }`}
                      alt="Imagem do projeto"
                    />

                    {!activeLession ? "Nenhuma aula ou desafio foi encontrada" : ""}
                  </ProjectVideo>
                ) : (
                  <></>
                )}

                {activeLession?.image === null &&
                activeLession?.image === undefined &&
                activeLession?.image === "" &&
                activeLession?.video === null &&
                activeLession?.video === undefined &&
                activeLession?.video === "" ? (
                  <ProjectVideo>
                    <ProjectImg
                      src="/assets/img/empty.jpg"
                      alt="Nenhuma imagem ou vídeo foi encontrada"
                    />

                    {!activeLession ? "Nenhuma aula ou desafio foi encontrada" : ""}
                  </ProjectVideo>
                ) : (
                  <> </>
                )}

                <ProjectDescription
                  dangerouslySetInnerHTML={{ __html: activeLession?.description }}
                ></ProjectDescription>

                <SendProjectFooter>
                  {activeLession?.type === 2 ? (
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
                  ) : (
                    <></>
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
              </ProjectSideBarHeader>

              <ProjectSideBarListContent>
                {lessions?.lessions?.map((lession) => {
                  return (
                    <>
                      <Link
                        style={
                          lession?.id == activeLessionId ? { color: "#2a7ae9" } : { color: "#fff" }
                        }
                        to={`?activeLessionId=${lession?.id}`}
                      >
                        <ProjectSideBarListItem>
                          <ProjectSideBarListItemTitle>
                            <p>{lession?.name}</p>
                            {lession?.type === 1 && <IconPlay />}
                            {lession?.type === 2 && <IconChallenge />}
                          </ProjectSideBarListItemTitle>
                        </ProjectSideBarListItem>
                      </Link>
                    </>
                  );
                })}
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
              </ProjectFooter>
            </ProjectSideBarList>
          </Content>
        </Container>
      ) : (
        <></>
      )}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default Project;
