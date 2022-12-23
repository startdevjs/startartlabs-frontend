import { Link } from "react-router-dom";
import {
  Container,
  ProjectCardInfo,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardButton,
  ProjectCardImage,
} from "./styles";

const ProjectCard = ({ key, id, name, description, image }) => {
  return (
    <Container key={key}>
      <ProjectCardImage image={image} />

      <ProjectCardInfo>
        <ProjectCardTitle>{name}</ProjectCardTitle>

        <ProjectCardDescription>
          {description?.slice(0, 100)}
          {description?.length > 100 && "..."}
        </ProjectCardDescription>
      </ProjectCardInfo>

      <Link to={`/projects?challenges=${true}&activeProjectId=${id}`}>
        <ProjectCardButton>Acessar</ProjectCardButton>
      </Link>
    </Container>
  );
};

export default ProjectCard;
