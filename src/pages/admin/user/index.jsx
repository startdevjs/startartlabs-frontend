import { useMemo, useState } from "react";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/user";
import TableMobile from "../../../components/admin/tableMobile/user";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllUsersInRequest } from "../../../store/modules/getAllUsers/actions";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const AdminUser = () => {
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);

  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const getAllUsers = useSelector((state) => state.getAllUsers);

  useMemo(() => {
    dispatch(getAllUsersInRequest());
  }, [dispatch]);

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
      dispatch,
      setIsOpenModalDelete,
      setCloseModalDelete,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          {width > 1180 ? (
            <Table
              getAllUsers={getAllUsers}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
            />
          ) : (
            <TableMobile
              getAllUsers={getAllUsers}
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

export default AdminUser;
