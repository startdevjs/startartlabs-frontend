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

const TableProjectComponent = ({
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
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nome</Th>
              <Th>Descrição</Th>
              <Th>status</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {projects?.projects?.map((project, i) => (
              <Tr key={i}>
                <Td>{project?.id}</Td>
                <Td>{project?.name}</Td>
                <Td>{project?.description?.substring(0, 60)}...</Td>
                <Td>
                  <Toggle
                    value={project?.status}
                    onChange={async () => {
                      await api.put(`/project/${project?.id}`, {
                        status: !project?.status,
                      });
                    }}
                  />
                </Td>
                <Td>
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

export default TableProjectComponent;
