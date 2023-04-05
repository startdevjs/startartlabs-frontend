import api from "../../../../services/api";
import { getAllProjectTags } from "./getAllProjectTag";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setProjectTags,
) => {
  setLoading(true);

  try {
    await api.delete(`/tag/${id}`);

    getAllProjectTags(setLoading, setProjectTags);

    setIsOpenModalDelete(false);
    setCloseModalDelete(true);

    setLoading(false);
    setSuccess(true);
    setMessage("Tag deletado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao deletar tag");
  }
};
