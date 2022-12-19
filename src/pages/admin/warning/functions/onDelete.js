import api from "../../../../services/api";
import { getAllWarnings } from "./getAllWarning";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setWarnings,
) => {
  setLoading(true);

  try {
    await api.delete(`/warning/${id}`);

    getAllWarnings(setLoading, setWarnings);

    setIsOpenModalDelete(false);
    setCloseModalDelete(true);

    setLoading(false);
    setSuccess(true);
    setMessage("Usuário deletado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao deletar usuário");
  }
};
