import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/lession";
import TableMobile from "../../../components/admin/tableMobile/lession";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllLessions } from "./functions/getAllLessions";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ButtonCreateLessionContainer, ButtonCreateLession } from "./styles";

const AdminLession = () => {
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [lessions, setLessions] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    getAllLessions(setLoading, setLessions);
  }, []);

  const handleOpenAndCloseModalDelete = () => {
    setIsOpenModalDelete(!isOpenModalDelete);
    setCloseModalDelete(!closeModalDelete);
  };

  const handleDeleteItem = () => {
    onDelete(
      id,
      setLoading,
      setSuccess,
      setError,
      setMessage,
      setIsOpenModalDelete,
      setCloseModalDelete,
      setLessions,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <ButtonCreateLessionContainer>
            <ButtonCreateLession>
              <Link to="/admin/lession/create">
                <a>Criar aula</a>
              </Link>
            </ButtonCreateLession>
          </ButtonCreateLessionContainer>

          {width > 1180 ? (
            <Table lessions={lessions} actionDelete={handleOpenAndCloseModalDelete} setId={setId} />
          ) : (
            <TableMobile
              lessions={lessions}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
            />
          )}

          <ModalDelete
            isOpen={isOpenModalDelete}
            onClose={handleOpenAndCloseModalDelete}
            onDelete={handleDeleteItem}
          />
        </>
      )}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default AdminLession;
