import api from "../../../../services/api";
import { getAllUsers } from "./getAllUsers";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setIsOpenModalDelete,
  setCloseModalDelete,
  setUsers,
) => {
  setLoading(true);

  try {
    await api.delete(`/user/${id}`);

    getAllUsers(setLoading, setUsers);

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
