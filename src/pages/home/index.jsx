import { useEffect, useState } from "react";
import { getAllProjects } from "./functions/getAllProjects";
import { getAllWarnings } from "./functions/getAllWarning";
import ProjectCard from "../../components/projectCard";
import Loading from "../../components/loading";
import {
  Container,
  WarningContainer,
  WarningOverlay,
  WarningTitle,
  WarningDescription,
  WarningContainerButton,
  WarningContainerInfo,
  WarningButton,
  ProjectContainer,
  ProjectTitle,
  ProjectContent,
} from "./styles";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [loadingWarning, setLoadingWarning] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllWarnings(setLoadingWarning, setWarnings);
    getAllProjects(setLoading, setProjects);
  }, []);

  return (
    <>
      <Container>
        {loadingWarning && <Loading />}
        {!loadingWarning && (
          <WarningContainer>
            <WarningOverlay background={warnings?.warnings?.[0]?.background ?? "#6f4ef2"} />

            <WarningContainerInfo>
              <WarningTitle>{warnings?.warnings?.[0]?.title}</WarningTitle>

              <WarningDescription>{warnings?.warnings?.[0]?.description}</WarningDescription>

              <WarningContainerButton>
                <WarningButton onClick={() => window.open(warnings?.warnings?.[0]?.link, "_blank")}>
                  Continue
                </WarningButton>
              </WarningContainerButton>
            </WarningContainerInfo>
          </WarningContainer>
        )}

        {loading && <Loading />}
        {!loading && (
          <ProjectContainer>
            <ProjectTitle>Projetos</ProjectTitle>

            <ProjectContent>
              {projects?.projects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  id={project?.id}
                  name={project?.name}
                  description={project?.description}
                  image={project?.image}
                />
              ))}
            </ProjectContent>
          </ProjectContainer>
        )}
      </Container>
    </>
  );
};

export default Home;
