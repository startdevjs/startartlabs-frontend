import { Link } from "react-router-dom";
import api from "../../../services/api";
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

const TableMobileWarningComponent = ({ actionDelete, warnings, setId }) => {
  return (
    <Container>
      {warnings?.warnings?.map((warning, i) => (
        <Card key={i}>
          <CardHeader>
            <TitleCardHeader>
              Titulo: <CardBodyText>{warning?.title}</CardBodyText>
            </TitleCardHeader>

            <TitleCardHeader>
              Descrição: <CardBodyText>{warning?.description}</CardBodyText>
            </TitleCardHeader>

            <TitleCardHeader>
              Background: <CardBodyText>{warning?.background}</CardBodyText>
            </TitleCardHeader>
          </CardHeader>

          <CardFooter>
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
          </CardFooter>
        </Card>
      ))}
    </Container>
  );
};

export default TableMobileWarningComponent;
