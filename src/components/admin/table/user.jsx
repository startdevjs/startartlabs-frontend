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

const TableUserComponent = ({
  actionDelete,
  users,
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
              <Th>Username</Th>
              <Th>email</Th>
              <Th>status</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {users?.users?.map((user, i) => (
              <Tr key={i}>
                <Td>{user?.id}</Td>
                <Td>{user?.name}</Td>
                <Td>{user?.username}</Td>
                <Td>{user?.email}</Td>
                <Td>
                  <Toggle
                    value={user?.status}
                    onChange={async () => {
                      await api.put(`/user/${user?.id}`, {
                        status: !user?.status,
                      });
                    }}
                  />
                </Td>
                <Td>
                  <ContainerButtons>
                    <ButtonEdit>
                      <Link to={`/admin/user/update/${user?.id}`}>
                        <a>Editar</a>
                      </Link>
                    </ButtonEdit>

                    <ButtonDelete
                      onClick={() => {
                        actionDelete();
                        setId(user?.id);
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

export default TableUserComponent;
