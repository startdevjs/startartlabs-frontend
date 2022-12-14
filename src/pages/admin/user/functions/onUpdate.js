import api from "../../../../services/api";
import { getAllUsersInRequest } from "../../../../store/modules/getAllUsers/actions";

export const onUpdate = async (
  id,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  dispatch,
) => {
  setLoading(true);

  try {
    await api.put(`/user/${id}`, data);

    dispatch(getAllUsersInRequest());

    setTimeout(() => {
      window.location.href = "/admin";
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage("Usuário atualizado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao atualizar usuário");
  }
};
