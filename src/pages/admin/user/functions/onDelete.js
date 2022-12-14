import api from "../../../../services/api";
import { getAllUsersInRequest } from "../../../../store/modules/getAllUsers/actions";

export const onDelete = async (
  id,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  dispatch,
  setIsOpenModalDelete,
  setCloseModalDelete,
) => {
  setLoading(true);

  try {
    await api.delete(`/user/${id}`);

    dispatch(getAllUsersInRequest());
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
