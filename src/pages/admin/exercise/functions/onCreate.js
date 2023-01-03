import api from "../../../../services/api";

export const onCreate = async (data, setLoading, setSuccess, setError, setMessage, navigate) => {
  setLoading(true);

  try {
    await api.post(`/warning`, data);

    setTimeout(() => {
      navigate("/admin/warning");
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage("Aviso criado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao criar aviso");
  }
};
