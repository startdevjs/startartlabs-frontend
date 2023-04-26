import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/projectTag";
import TableMobile from "../../../components/admin/tableMobile/projectTag";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllProjectTags } from "./functions/getAllProjectTag";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ButtonCreateProjectTag, ButtonCreateProjectTagContainer } from "./styles";

const AdminProjectTag = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [projectTags, setProjectTags] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllProjectTags(setLoading, setProjectTags, skip, take);
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
      setProjectTags,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <ButtonCreateProjectTagContainer>
            <ButtonCreateProjectTag>
              <Link to="/admin/projectTag/create">
                <a>Criar tag</a>
              </Link>
            </ButtonCreateProjectTag>
          </ButtonCreateProjectTagContainer>

          {width > 1180 ? (
            <Table
              projectTags={projectTags}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              setPage={setPage}
              totalCountOfRegisters={projectTags?.total}
              page={page}
              registersPerPage={20}
            />
          ) : (
            <TableMobile
              projectTags={projectTags}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              setPage={setPage}
              totalCountOfRegisters={projectTags?.total}
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

export default AdminProjectTag;
