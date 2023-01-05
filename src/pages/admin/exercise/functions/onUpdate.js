import api from "../../../../services/api";

export const onUpdate = async (
  id,
  status,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  navigate,
) => {
  setLoading(true);

  try {
    await api.put(`/exercise/${id}`, {
      status: Number(status),
    });

    setTimeout(() => {
      navigate("/admin/exercise");
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage("Exercício corrigido com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao corrigir exercício");
  }
};
