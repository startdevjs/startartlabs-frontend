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
  ButtonCorrection,
  Corrected,
  ButtonView
} from "./styles";

const TableExerciseComponent = ({
  actionDelete,
  exercises,
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
              {/* <Th>Id</Th> */}
              {/* <Th>Titulo da aula</Th> */}
              <Th>Nome</Th>
              <Th>Email</Th>
              {/* <Th>Link</Th> */}
              {/* <Th>Branch</Th> */}
              <Th
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Corrigida
              </Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {exercises?.exercies?.map((exercise, i) => (
              <Tr key={i}>
                {/* <Td>{exercise?.id}</Td>
                <Td>{exercise?.lession?.name}</Td> */}
                <Td>{exercise?.user?.name}</Td>
                <Td>{exercise?.user?.email}</Td>

                {/* <Td>
                  <a target="_blank" href={exercise?.link}>
                    {exercise?.link}
                  </a>
                </Td>
                <Td>{exercise?.branch}</Td> */}
                <Td>
                  <Corrected
                    background={
                      exercise?.status === 1
                        ? "#ccc"
                        : exercise?.status === 2
                        ? "#ffcc00"
                        : "#57c957"
                    }
                  >
                    {exercise?.status === 1 && "Não corrigida"}
                    {exercise?.status === 2 && "Refazer"}
                    {exercise?.status === 3 && "Corrigida"}
                  </Corrected>
                </Td>
                <Td>
                  <ContainerButtons>
                    <ButtonView>
                      <Link to={`/admin/exercise/view/${exercise?.id}`}>
                        <a>Visualizar</a>
                      </Link>
                    </ButtonView>

                    <ButtonCorrection>
                      <Link to={`/admin/exercise/update/${exercise?.id}`}>
                        <a>Corrigir</a>
                      </Link>
                    </ButtonCorrection>

                    <ButtonDelete
                      onClick={() => {
                        actionDelete();
                        setId(exercise?.id);
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

export default TableExerciseComponent;
