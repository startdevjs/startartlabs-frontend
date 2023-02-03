import { Link } from "react-router-dom";
import api from "../../../services/api";
import Toggle from "../../toggle";
import Pagination from "../../pagination";
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
import useWhiteLabel from "../../../hooks/useWhiteLabel";

const TableLessionComponent = ({
  actionDelete,
  lessions,
  setId,
  page,
  setPage,
  registersPerPage,
  totalCountOfRegisters,
}) => {
  const whiteLabel = useWhiteLabel();

  return (
    <>
      <Container>
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nome</Th>
              <Th>Descrição</Th>
              <Th>Tipo</Th>
              <Th>{whiteLabel?.payment ? "Curso" : "Projeto"}</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {lessions?.lessions?.map((lession, i) => (
              <Tr key={i}>
                <Td>{lession?.id}</Td>
                <Td>{lession?.name}</Td>
                <Td>{lession?.description?.substring(0, 50)}...</Td>
                <Td>{lession?.type == 1 ? "Video" : "Desafio"}</Td>
                <Td>{lession?.projectId}</Td>
                <Td>
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
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
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

export default TableLessionComponent;
