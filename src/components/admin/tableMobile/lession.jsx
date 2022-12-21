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

const TableMobileLessionComponent = ({
  actionDelete,
  lessions,
  setId,
  page,
  setPage,
  registersPerPage,
  totalCountOfRegisters,
}) => {
  return (
    <>
      <Container>
        {lessions?.lessions?.map((lession, i) => (
          <Card key={i}>
            <CardHeader>
              <TitleCardHeader>
                Nome: <CardBodyText>{lession?.name}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Descrição: <CardBodyText>{lession?.description}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Tipo: <CardBodyText>{lession?.type == 1 ? "Video" : "Desafio"}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Projeto: <CardBodyText>{lession?.projectId}</CardBodyText>
              </TitleCardHeader>
            </CardHeader>

            <CardFooter>
              <ContainerButtons>
                <ButtonEdit>
                  <Link to={`/admin/lession/update/${lession?.id}`}>
                    <a>Editar</a>
                  </Link>
                </ButtonEdit>

                <ButtonDelete
                  onClick={() => {
                    actionDelete();
                    setId(lession?.id);
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

export default TableMobileLessionComponent;
