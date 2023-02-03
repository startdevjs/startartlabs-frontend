import api from "../../../../services/api";
import { getAllProjects } from "./getAllProjects";

const whiteLabel = JSON.parse(localStorage.getItem("whiteLabel"));

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setProjects,
) => {
  setLoading(true);

  try {
    await api.delete(`/project/${id}`);

    getAllProjects(setLoading, setProjects);

    setIsOpenModalDelete(false);
    setCloseModalDelete(true);

    setLoading(false);
    setSuccess(true);
    setMessage(whiteLabel?.payment ? "Curso" : "Projeto" + " deletado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao deletar o " + whiteLabel?.payment ? "curso" : "projeto");
  }
};
