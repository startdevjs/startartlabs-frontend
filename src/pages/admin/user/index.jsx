import { useEffect, useState } from "react";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/user";
import TableMobile from "../../../components/admin/tableMobile/user";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllUsers } from "./functions/getAllUsers";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const AdminUser = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [users, setUsers] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllUsers(setLoading, setUsers, skip, take);
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
      setUsers,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          {width > 1180 ? (
            <Table
              users={users}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              onPageChange={setPage}
              totalCountOfRegisters={users?.total}
              page={page}
              registersPerPage={20}
            />
          ) : (
            <TableMobile
              users={users}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              onPageChange={setPage}
              totalCountOfRegisters={users?.total}
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

export default AdminUser;
