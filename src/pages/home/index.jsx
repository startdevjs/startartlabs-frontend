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
import Pagination from "../../components/pagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingWarning, setLoadingWarning] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllWarnings(setLoadingWarning, setWarnings);
  }, []);

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllProjects(setLoading, setProjects, skip, take);
  }, [page]);

  return (
    <>
      <Container>
        {loadingWarning && <Loading />}
        {!loadingWarning && (
          <WarningContainer
            image={`${import.meta.env.VITE_BASE_URL_IMAGE}/public/warnings/${
              warnings?.warnings?.[0]?.image
            }`}
          >
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
          <>
            <ProjectContainer>
              <ProjectTitle>Projetos</ProjectTitle>

              <ProjectContent>
                {projects?.projects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    id={project?.id}
                    name={project?.name}
                    description={project?.description}
                    image={
                      project?.image !== null &&
                      project?.image !== undefined &&
                      project?.image !== ""
                        ? `${import.meta.env.VITE_BASE_URL_IMAGE}/public/images/${project?.image}`
                        : ""
                    }
                  />
                ))}
              </ProjectContent>
            </ProjectContainer>

            {projects?.projects?.length >= 4 && (
              <Pagination
                onPageChange={setPage}
                totalCountOfRegisters={projects?.total}
                currentPage={page}
                registersPerPage={20}
              />
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
