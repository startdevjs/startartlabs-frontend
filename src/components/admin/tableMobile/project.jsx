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

const TableMobileProjectComponent = ({
  actionDelete,
  projects,
  setId,
  page,
  setPage,
  registersPerPage,
  totalCountOfRegisters,
}) => {
  return (
    <>
      <Container>
        {projects?.projects?.map((project, i) => (
          <Card key={i}>
            <CardHeader>
              <TitleCardHeader>
                Nome: <CardBodyText>{project?.name}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Descrição: <CardBodyText>{project?.description}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Status:{" "}
                <CardBodyText
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  <Toggle
                    value={project?.status}
                    onChange={async () => {
                      await api.put(`/project/${project?.id}`, {
                        status: !project?.status,
                      });
                    }}
                  />
                </CardBodyText>
              </TitleCardHeader>
            </CardHeader>

            <CardFooter>
              <ContainerButtons>
                <ButtonEdit>
                  <Link to={`/admin/project/update/${project?.id}`}>
                    <a>Editar</a>
                  </Link>
                </ButtonEdit>

                <ButtonDelete
                  onClick={() => {
                    actionDelete();
                    setId(project?.id);
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

export default TableMobileProjectComponent;
