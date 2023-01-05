import api from "../../../services/api";

export const sendProject = async (
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setLinkProject,
  setBranchProject,
) => {
  setLoading(true);

  try {
    await api.post(`/exercise`, data);

    setLoading(false);

    setLinkProject({});
    setBranchProject({});

    setSuccess(true);
    setError(false);

    setMessage("Solução do projeto foi enviada com sucesso");
  } catch (error) {
    setLoading(false);
    setSuccess(false);
    setError(true);

    setMessage("Erro ao enviar a solução do projeto");
  }
};
