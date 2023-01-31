import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import ProjectCard from "../../components/projectCard";
import useWhiteLabel from "../../hooks/useWhiteLabel";
import { getAllProjects } from "./functions/getAllProjects";
import { Container, ProjectContainer, ProjectContent, ProjectTitle } from "./styles";

const Projects = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  const whiteLabel = useWhiteLabel();

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllProjects(setLoading, setProjects, skip, take);
  }, [page]);

  return (
    <>
      <Container>
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

export default Projects;
