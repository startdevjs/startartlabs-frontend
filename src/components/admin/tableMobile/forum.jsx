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

const TableMobileWarningComponent = ({
  actionDelete,
  forums,
  setId,
  page,
  setPage,
  registersPerPage,
  totalCountOfRegisters,
}) => {
  return (
    <>
      <Container>
        {forums?.forumInfos?.id !== null && forums?.forumInfos?.id !== undefined ? (
          <Card>
            <CardHeader>
              <TitleCardHeader>
                Titulo - Tópicos: <CardBodyText>{forums?.forumInfos?.topic_title}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Descrição - Tópicos:{" "}
                <CardBodyText>
                  {forums?.forumInfos?.topic_subtitle?.slice(0, 30) + "..."}
                </CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Titulo - Respostas: <CardBodyText>{forums?.forumInfos?.reply_title}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Descrição - Respostas:{" "}
                <CardBodyText>
                  {forums?.forumInfos?.reply_subtitle?.slice(0, 30) + "..."}
                </CardBodyText>
              </TitleCardHeader>
            </CardHeader>

            <CardFooter>
              <ContainerButtons>
                <ButtonEdit>
                  <Link to={`/admin/forum/update/${forums?.forumInfos?.id}`}>
                    <a>Editar</a>
                  </Link>
                </ButtonEdit>

                <ButtonDelete
                  onClick={() => {
                    actionDelete();
                    setId(forums?.forumInfos?.id);
                  }}
                >
                  Excluir
                </ButtonDelete>
              </ContainerButtons>
            </CardFooter>
          </Card>
        ) : (
          <></>
        )}
      </Container>

      {/* <Pagination
        onPageChange={setPage}
        totalCountOfRegisters={totalCountOfRegisters}
        currentPage={page}
        registersPerPage={registersPerPage}
      /> */}
    </>
  );
};

export default TableMobileWarningComponent;
