import { Link } from "react-router-dom";
import api from "../../../services/api";
import Pagination from "../../pagination";
import Toggle from "../../toggle";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
  ContainerButtons,
  ButtonEdit,
  ButtonDelete,
} from "./styles";

const TableWarningComponent = ({
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
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Titulo - Tópicos</Th>
              <Th>Descrição - Tópicos</Th>
              <Th>Titulo - Respostas</Th>
              <Th>Descrição - Respostas</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          {forums?.forumInfos?.id !== null && forums?.forumInfos?.id !== undefined ? (
            <Tbody>
              <Tr>
                <Td>{forums?.forumInfos?.id}</Td>

                <Td>{forums?.forumInfos?.topic_title}</Td>
                <Td>{forums?.forumInfos?.topic_subtitle?.slice(0, 30) + "..."}</Td>
                <Td>{forums?.forumInfos?.reply_title}</Td>
                <Td>{forums?.forumInfos?.reply_subtitle?.slice(0, 30) + "..."}</Td>

                <Td>
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
                </Td>
              </Tr>
            </Tbody>
          ) : (
            <></>
          )}
        </Table>
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

export default TableWarningComponent;
