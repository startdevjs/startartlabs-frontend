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
  ProjectCardTags,
  Tag
} from "./styles";

const ProjectCard = ({ key, id, name, description, image, price, tags }) => {
  const whiteLabel = useWhiteLabel();

  console.log(tags);

  return (
    <Container key={key}>
      <ProjectCardImage image={image} />

      <ProjectCardInfo>
        <ProjectCardTags>
          {
            tags?.map((tag) => (
              <>
                <Tag
                  key={tag?.tag?.id}
                  class="tag tag--black"
                  color={tag?.tag?.color}
                >{
                  tag?.tag?.name
                }</Tag>
              </>
            ))
          }</ProjectCardTags>

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
          dangerouslySetInnerHTML={{ __html: description?.slice(0, 100) + "..." }}
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
