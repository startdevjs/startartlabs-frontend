import api from "../../../../services/api";
import { getAllExercises } from "./getAllExercises";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setExercises,
) => {
  setLoading(true);

  try {
    await api.delete(`/exercise/${id}`);

    getAllExercises(setLoading, setExercises);

    setIsOpenModalDelete(false);
    setCloseModalDelete(true);

    setLoading(false);
    setSuccess(true);
    setMessage("Exercício deletado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao deletar exercício");
  }
};
