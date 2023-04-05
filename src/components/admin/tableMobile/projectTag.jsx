import { Link } from "react-router-dom";
import api from "../../../services/api";
import Pagination from "../../pagination";
import Toggle from "../../toggle";
import {
  Container,
  ContainerButtons,
  ButtonEdit,
  ButtonDelete,
  Card,
  CardHeader,
  TitleCardHeader,
  CardBodyText,
  CardFooter,
} from "./styles";

const TableMobileProjectTagComponent = ({
  actionDelete,
  projectTags,
  setId,
  page,
  setPage,
  registersPerPage,
  totalCountOfRegisters,
}) => {
  return (
    <>
      <Container>
        {projectTags?.projectTags?.map((projectTag, i) => (
          <Card key={i}>
            <CardHeader>
              <TitleCardHeader>
                Titulo: <CardBodyText>{projectTag?.title}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Nome: <CardBodyText>{projectTag?.name}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Cor: <CardBodyText>{projectTag?.color}</CardBodyText>
              </TitleCardHeader>
            </CardHeader>

            <CardFooter>
              <ContainerButtons>
                <ButtonEdit>
                  <Link to={`/admin/projectTag/update/${projectTag?.id}`}>
                    <a>Editar</a>
                  </Link>
                </ButtonEdit>

                <ButtonDelete
                  onClick={() => {
                    actionDelete();
                    setId(projectTag?.id);
                  }}
                >
                  Excluir
                </ButtonDelete>
              </ContainerButtons>
            </CardFooter>
          </Card>
        ))}
      </Container>

      <Pagination
        onPageChange={setPage}
        totalCountOfRegisters={totalCountOfRegisters}
        currentPage={page}
        registersPerPage={registersPerPage}
      />
    </>
  );
};

export default TableMobileProjectTagComponent;
