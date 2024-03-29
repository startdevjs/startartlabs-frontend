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
import useWhiteLabel from "../../hooks/useWhiteLabel";
import { getCourses } from "./functions/getCourses";

const Home = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [loadingWarning, setLoadingWarning] = useState([]);
  const [warnings, setWarnings] = useState([]);
  const [projects, setProjects] = useState([]);

  const whiteLabel = useWhiteLabel();

  useEffect(() => {
    getAllWarnings(setLoadingWarning, setWarnings);
  }, []);

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    if (whiteLabel?.payment) {
      getCourses(setLoading, setProjects);
    } else {
      getAllProjects(setLoading, setProjects, skip, take);
    }
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
                <a target="_blank" href={warnings?.warnings?.[0]?.action}>
                  <WarningButton>Continue</WarningButton>
                </a>
              </WarningContainerButton>
            </WarningContainerInfo>
          </WarningContainer>
        )}

        {loading && <Loading />}
        {!loading && (
          <>
            <ProjectContainer>
              <ProjectTitle>{whiteLabel?.payment ? "Cursos" : "Projetos"}</ProjectTitle>

              <ProjectContent>
                {projects?.projects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    id={project?.id}
                    name={project?.name}
                    description={project?.description}
                    price={project?.price}
                    tags={project?.ProjectTag}
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

            {projects?.projects?.length >= 20 || page >= 2 ? (
              <Pagination
                onPageChange={setPage}
                totalCountOfRegisters={projects?.total}
                currentPage={page}
                registersPerPage={20}
              />
            ) : (
              <></>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Home;
