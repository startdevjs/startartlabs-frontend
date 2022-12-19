import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/warning";
import TableMobile from "../../../components/admin/tableMobile/warning";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllWarnings } from "./functions/getAllWarning";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ButtonCreateWarning, ButtonCreateWarningContainer } from "./styles";

const AdminWarning = () => {
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [warnings, setWarnings] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    getAllWarnings(setLoading, setWarnings);
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
      setWarnings,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <ButtonCreateWarningContainer>
            <ButtonCreateWarning>
              <Link to="/admin/warning/create">
                <a>Criar aviso</a>
              </Link>
            </ButtonCreateWarning>
          </ButtonCreateWarningContainer>

          {width > 1180 ? (
            <Table warnings={warnings} actionDelete={handleOpenAndCloseModalDelete} setId={setId} />
          ) : (
            <TableMobile
              warnings={warnings}
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

export default AdminWarning;
