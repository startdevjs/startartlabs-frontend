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
  warnings,
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
              <Th>Titulo</Th>
              <Th>Descrição</Th>
              <Th>Background</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {warnings?.warnings?.map((warning, i) => (
              <Tr key={i}>
                <Td>{warning?.id}</Td>
                <Td>{warning?.title}</Td>
                <Td>{warning?.description}</Td>
                <Td>{warning?.background}</Td>
                <Td>
                  <ContainerButtons>
                    <ButtonEdit>
                      <Link to={`/admin/warning/update/${warning?.id}`}>
                        <a>Editar</a>
                      </Link>
                    </ButtonEdit>

                    <ButtonDelete
                      onClick={() => {
                        actionDelete();
                        setId(warning?.id);
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

export default TableWarningComponent;
