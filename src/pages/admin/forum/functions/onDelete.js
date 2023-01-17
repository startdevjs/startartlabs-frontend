import api from "../../../../services/api";
import { getForums } from "./getForums";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setForums,
) => {
  setLoading(true);

  try {
    await api.delete(`/forumInfos/${id}`);

    getForums(setLoading, setForums);

    setIsOpenModalDelete(false);
    setCloseModalDelete(true);

    setLoading(false);
    setSuccess(true);
    setMessage("Informação deletada com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao deletar a informação");
  }
};
