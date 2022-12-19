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
    await api.put(`/project/${id}`, data);

    setTimeout(() => {
      navigate("/admin");
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage("Projeto atualizado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao atualizar o projeto");
  }
};
