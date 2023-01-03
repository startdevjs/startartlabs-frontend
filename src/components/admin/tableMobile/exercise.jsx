import { Link } from "react-router-dom";
import api from "../../../services/api";
import Pagination from "../../pagination";
import Toggle from "../../toggle";
import {
  Container,
  ContainerButtons,
  ButtonEdit,
  ButtonDelete,
  ButtonCorrection,
  Card,
  CardHeader,
  TitleCardHeader,
  CardBodyText,
  CardFooter,
  Corrected,
} from "./styles";

const TableMobileExerciseComponent = ({
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
        {exercises?.exercies?.map((exercise, i) => (
          <Card key={i}>
            <CardHeader>
              <TitleCardHeader>
                Titulo da aula: <CardBodyText>{exercise?.lession?.name}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Username: <CardBodyText>{exercise?.user?.username}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Email: <CardBodyText>{exercise?.user?.email}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Link:{" "}
                <CardBodyText>
                  <a target="_blank" href={exercise?.link}>
                    {exercise?.link}
                  </a>
                </CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Branch: <CardBodyText>{exercise?.branch}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Corrigida:{" "}
                <Corrected
                  style={{ marginTop: "10px" }}
                  background={
                    exercise?.status === 1 ? "#ccc" : exercise?.status === 2 ? "#ffcc00" : "#ff4d4d"
                  }
                >
                  {exercise?.status === 1 && "Não corrigida"}
                  {exercise?.status === 2 && "Refazer"}
                  {exercise?.status === 3 && "Corrigida"}
                </Corrected>
              </TitleCardHeader>
            </CardHeader>

            <CardFooter>
              <ContainerButtons>
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

export default TableMobileExerciseComponent;
