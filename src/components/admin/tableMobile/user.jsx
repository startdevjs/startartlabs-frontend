import { Link } from "react-router-dom";
import api from "../../../services/api";
import Toggle from "../../toggle";
import {
  Container,
  ContainerButtons,
  ButtonEdit,
  ButtonDelete,
  CardUser,
  CardUserHeader,
  TitleCardUserHeader,
  CardUserBodyText,
  CardUserFooter,
} from "./styles";

const TableMobileUserComponent = ({ actionDelete, users, setId }) => {
  return (
    <Container>
      {users?.users?.map((user, i) => (
        <CardUser key={i}>
          <CardUserHeader>
            <TitleCardUserHeader>
              Nome: <CardUserBodyText>{user?.name}</CardUserBodyText>
            </TitleCardUserHeader>

            <TitleCardUserHeader>
              Username: <CardUserBodyText>{user?.username}</CardUserBodyText>
            </TitleCardUserHeader>

            <TitleCardUserHeader>
              Email: <CardUserBodyText>{user?.email}</CardUserBodyText>
            </TitleCardUserHeader>

            <TitleCardUserHeader>
              Status:{" "}
              <CardUserBodyText
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
              </CardUserBodyText>
            </TitleCardUserHeader>
          </CardUserHeader>

          <CardUserFooter>
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
          </CardUserFooter>
        </CardUser>
      ))}
    </Container>
  );
};

export default TableMobileUserComponent;
