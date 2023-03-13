import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
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
  ButtonDiv,
  ButtonCommunity,
  IconChat,
} from "./styles";
import api from "../../services/api";
import useWhiteLabel from "../../hooks/useWhiteLabel";

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
  const [videoUrl, setVideoUrl] = useState('');

  const { projectId } = useParams();
  const navigate = useNavigate();
  const whiteLabel = useWhiteLabel();

  const query = useQuery();
  const activeLessionId = query.get("activeLessionId");

  useEffect(() => {
    const skip = (pageLession - 1) * 20;
    const take = 20;

    getAllLessions(setLoading, setLessions, projectId, skip, take);
  }, [pageLession]);

  useMemo(async () => {
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

  useMemo(async () => {
    if (whiteLabel?.payment) {
      const registration = await api.get(`/registration/projects/${projectId}}`);
      if (registration?.status === 400) {
        navigate("/projects");
      }
    }
  }, []);

  useMemo(async () => {


    // setTimeout(() => {
    //   stream.getTracks().forEach(track => track.stop());
    //   video.src = '';
    //   window.URL.revokeObjectURL(url);
    // }, 50000); // definindo o tempo de duração da URL temporária para 5 segundos

    // const session = JSON.parse(localStorage.getItem("startdev-labs"));
    // // const response = await fetch('http://localhost:3001/public/videos/1678386099962.mp4');

    // const response = await fetch(`${import.meta.env.VITE_BASE_URL_IMAGE}/public/videos/1678386099962.mp4`);
    // const blob = await response.blob();
    // const url = (URL || webkitURL).createObjectURL(blob);
    // setVideoURl(url);
    // (URL || webkitURL).revokeObjectURL(url);

    

    // fetch(`http://localhost:3001/public/videos/1678386099962.mp4`, {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "video/mp4",
    //       Authorization: `Bearer ${session?.token}`,
    //     },
    // })
    //   .then(response => {
    //     const myResponse = response.clone();
    //     return myResponse.blob();
    //   })
    //   .then(myBlob => {
    //     var objectURL = URL.createObjectURL(myBlob);
    //     setVideoURl(objectURL);
    //   });
  }, [])

  // useEffect(() => {
  //   async function fetchVideo() {
  //     const response = await fetch(`${import.meta.env.VITE_BASE_URL_IMAGE}/public/videos/1678386099962.mp4`);
  //     const blob = await response.blob();
  //     const url = URL.createObjectURL(blob);
  //     setVideoUrl(url);
  //   }
  //   fetchVideo();
  // }, []);


  if (lessions?.lessions?.length === 0) {
    return (
      <ContainerEmpty>
        <TitleEmpty>Nenhuma aula ou desafio foi encontrada</TitleEmpty>

        <DescriptionEmpty>
          {whiteLabel?.payment ? (
            <p>
              Nenhuma aula ou desafio foi encontrada para esse projeto. Explore outros dos nossos
              cursos.
            </p>
          ) : (
            <p>
              Nenhuma aula ou desafio foi encontrada para esse projeto. Explore outros dos nossos
              projetos.
            </p>
          )}
        </DescriptionEmpty>

        <Link to="/projects">
          <ButtonEmpty>
            <a>Explore outros {whiteLabel?.payment ? "Cursos" : "Projetos"}</a>
          </ButtonEmpty>
        </Link>
      </ContainerEmpty>
    );
  }

// recuperar apenas pc7AFKBvMsk do link https://www.youtube.com/watch?v=pc7AFKBvMsk
  const getVideoId = (url) => {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;      
  };


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

                {activeLession?.videoYT !== null &&
                activeLession?.videoYT !== undefined &&
                activeLession?.videoYT !== "" ? (
                  <ProjectVideo>
                    {/* <ProjectVideoPlayer
                      src={`https://www.youtube.com/embed/${activeLession?.videoYT}`}
                      controls
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    /> */}
                    
                    {activeLession?.videoYT  !== null && activeLession?.videoYT !== undefined ? (
                      <iframe
                        width="100%"
                        src={`https://www.youtube.com/embed/${getVideoId(activeLession?.videoYT)}`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                      /> 
                    ) : ""}
                  </ProjectVideo>
                ) : (
                  <></>
                )}

                {activeLession?.video !== null &&
                activeLession?.video !== undefined &&
                activeLession?.video !== "" ? (
                  <ProjectVideo>
                    <ProjectVideoPlayer
                      src={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/videos/${
                        activeLession?.video
                      }`}
                      
                      // src={videoUrl}
                      controlsList="nodownload"
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
                        required
                      />

                      <Input
                        text="Em qual branch está o projeto?"
                        name="branchProject"
                        type="text"
                        placeholder="Digite a branch do projeto"
                        value={branchProject}
                        onChange={onChange}
                        required
                      />

                      <ButtonSendProject
                        text="Enviar"
                        type="button"
                        disabled={
                          linkProject === "" ||
                          linkProject === null ||
                          linkProject === undefined ||
                          branchProject === "" ||
                          branchProject === null ||
                          branchProject === undefined
                            ? true
                            : false
                        }
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
                          lession?.id == activeLessionId
                            ? { color: "${({ theme: { colors } }) => colors.secondaryColor}" }
                            : { color: "#fff" }
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
              {activeLession.id && (
                <ButtonDiv>
                  <ButtonCommunity onClick={() => navigate(`/community/${activeLession.id}`)}>
                    Ver tópicos na Comunidade <IconChat />
                  </ButtonCommunity>
                </ButtonDiv>
              )}

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
