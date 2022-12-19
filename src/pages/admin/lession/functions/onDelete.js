import api from "../../../../services/api";
import { getAllLessions } from "./getAllLessions";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setLessions,
) => {
  setLoading(true);

  try {
    await api.delete(`/lession/${id}`);

    getAllLessions(setLoading, setLessions);

    setIsOpenModalDelete(false);
    setCloseModalDelete(true);

    setLoading(false);
    setSuccess(true);
    setMessage("Aula deletada com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao deletar a aula");
  }
};
