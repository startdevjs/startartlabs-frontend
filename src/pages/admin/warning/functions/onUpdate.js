import api from "../../../../services/api";

export const onUpdate = async (
  id,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  navigate,
) => {
  setLoading(true);

  try {
    await api.put(`/warning/${id}`, data);

    setTimeout(() => {
      navigate("/admin/warning");
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
