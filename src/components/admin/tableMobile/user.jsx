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

const TableMobileUserComponent = ({
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
        {users?.users?.map((user, i) => (
          <Card key={i}>
            <CardHeader>
              <TitleCardHeader>
                Nome: <CardBodyText>{user?.name}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Username: <CardBodyText>{user?.username}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Email: <CardBodyText>{user?.email}</CardBodyText>
              </TitleCardHeader>

              <TitleCardHeader>
                Status:{" "}
                <CardBodyText
                  style={{
                    marginTop: "0.5rem",
                  }}
                >
                  <Toggle
                    value={user?.status}
                    onChange={async () => {
                      await api.put(`/user/${user?.id}`, {
                        status: !user?.status,
                      });
                    }}
                  />
                </CardBodyText>
              </TitleCardHeader>
            </CardHeader>

            <CardFooter>
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

export default TableMobileUserComponent;
