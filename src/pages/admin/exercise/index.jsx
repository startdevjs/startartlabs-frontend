import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/exercise";
import TableMobile from "../../../components/admin/tableMobile/exercise";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllExercises } from "./functions/getAllExercises";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ButtonCreateExercise, ButtonCreateExerciseContainer } from "./styles";

const AdminExercise = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [exercises, setExercises] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllExercises(setLoading, setExercises, skip, take);
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
      setExercises,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          {/* <ButtonCreateExerciseContainer>
            <ButtonCreateExercise>
              <Link to="/admin/exercise/create">
                <a>Criar exercícios</a>
              </Link>
            </ButtonCreateExercise>
          </ButtonCreateExerciseContainer> */}

          {width > 1180 ? (
            <Table
              exercises={exercises}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              onPageChange={setPage}
              totalCountOfRegisters={exercises?.total}
              page={page}
              registersPerPage={20}
            />
          ) : (
            <TableMobile
              exercises={exercises}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              onPageChange={setPage}
              totalCountOfRegisters={exercises?.total}
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

export default AdminExercise;
