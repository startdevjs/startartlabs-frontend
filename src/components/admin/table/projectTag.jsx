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

const TableProjectTagComponent = ({
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
        <Table>
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Nome</Th>
              <Th>Cor</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {projectTags?.projectTags?.map((projectTag, i) => (
              <Tr key={i}>
                <Td>{projectTag?.id}</Td>

                <Td>{projectTag?.name}</Td>
                <Td>
                  {projectTag?.color}
                </Td>
            
                <Td>
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

export default TableProjectTagComponent;
