import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/forum";
import TableMobile from "../../../components/admin/tableMobile/forum";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getForums } from "./functions/getForums";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ButtonCreateForum, ButtonCreateForumContainer } from "./styles";

const AdminForum = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [forums, setForums] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    getForums(setLoading, setForums);
  }, [page]);

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
      setForums,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <ButtonCreateForumContainer>
            <ButtonCreateForum>
              <Link to="/admin/forum/create">
                <a>Adicionar</a>
              </Link>
            </ButtonCreateForum>
          </ButtonCreateForumContainer>

          {width > 1180 ? (
            <Table
              forums={forums}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              setPage={setPage}
              totalCountOfRegisters={forums?.total}
              page={page}
              registersPerPage={20}
            />
          ) : (
            <TableMobile
              forums={forums}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              setPage={setPage}
              totalCountOfRegisters={forums?.total}
              page={page}
              registersPerPage={20}
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

export default AdminForum;
