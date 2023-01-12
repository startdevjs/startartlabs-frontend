import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalDelete from "../../../components/admin/modalDelete";
import Table from "../../../components/admin/table/project";
import TableMobile from "../../../components/admin/tableMobile/project";
import Toast from "../../../components/toast";
import Loading from "../../../components/loading";
import { onDelete } from "./functions/onDelete";
import { getAllProjects } from "./functions/getAllProjects";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { ButtonCreateProjectContainer, ButtonCreateProject } from "./styles";

const AdminProject = () => {
  const [page, setPage] = useState(1);
  const [id, setId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [closeModalDelete, setCloseModalDelete] = useState(false);
  const [projects, setProjects] = useState([]);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const skip = (page - 1) * 20;
    const take = 20;

    getAllProjects(setLoading, setProjects, skip, take);
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
      setProjects,
    );
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <>
          <ButtonCreateProjectContainer>
            <ButtonCreateProject>
              <Link to="/admin/project/create">
                <a>Criar projeto</a>
              </Link>
            </ButtonCreateProject>
          </ButtonCreateProjectContainer>

          {width > 1180 ? (
            <Table
              projects={projects}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              setPage={setPage}
              totalCountOfRegisters={projects?.total}
              page={page}
              registersPerPage={20}
            />
          ) : (
            <TableMobile
              projects={projects}
              actionDelete={handleOpenAndCloseModalDelete}
              setId={setId}
              setPage={setPage}
              totalCountOfRegisters={projects?.total}
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

export default AdminProject;
