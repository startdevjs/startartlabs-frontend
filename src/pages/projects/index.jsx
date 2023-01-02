import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import Pagination from "../../components/pagination";
import ProjectCard from "../../components/projectCard";
import { getAllProjects } from "./functions/getAllProjects";
import { Container, ProjectContainer, ProjectContent, ProjectTitle } from "./styles";

const Projects = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

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

export default Projects;
