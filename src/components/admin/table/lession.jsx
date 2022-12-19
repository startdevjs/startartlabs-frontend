import { Link } from "react-router-dom";
import api from "../../../services/api";
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

const TableLessionComponent = ({ actionDelete, lessions, setId }) => {
  return (
    <Container>
      <Table>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Nome</Th>
            <Th>Descrição</Th>
            <Th>Tipo</Th>
            <Th>Projeto</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>

        <Tbody>
          {lessions?.lessions?.map((lession, i) => (
            <Tr key={i}>
              <Td>{lession?.id}</Td>
              <Td>{lession?.name}</Td>
              <Td>{lession?.description}</Td>
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
  );
};

export default TableLessionComponent;
