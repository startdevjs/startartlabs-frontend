import { Link } from "react-router-dom";
import useWhiteLabel from "../../hooks/useWhiteLabel";
import {
  Container,
  ProjectCardInfo,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardPrice,
  ProjectCardButton,
  ProjectCardImage,
} from "./styles";

const ProjectCard = ({ key, id, name, description, image, price }) => {
  const whiteLabel = useWhiteLabel();

  return (
    <Container key={key}>
      <ProjectCardImage image={image} />

      <ProjectCardInfo>
        <ProjectCardTitle>{name}</ProjectCardTitle>

        {/* {whiteLabel?.payment && (
          <ProjectCardPrice>
            {price !== null && price !== undefined
              ? new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(price)
              : ""}
          </ProjectCardPrice>
        )} */}

        <ProjectCardDescription
          dangerouslySetInnerHTML={{ __html: description }}
        ></ProjectCardDescription>
      </ProjectCardInfo>

      {whiteLabel?.payment ? (
        <Link to={`/course/${id}`}>
          <ProjectCardButton>Acessar</ProjectCardButton>
        </Link>
      ) : (
        <Link to={`/project/${id}`}>
          <ProjectCardButton>Acessar</ProjectCardButton>
        </Link>
      )}
    </Container>
  );
};

export default ProjectCard;
