import {
  Container,
  ProjectCardInfo,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardButton,
  ProjectCardImage,
} from "./styles";

const ProjectCard = ({ key, id, name, description, image }) => {
  console.log("image", image);

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

      <ProjectCardButton>Entrar</ProjectCardButton>
    </Container>
  );
};

export default ProjectCard;
