import api from "../../../../services/api";

export const onCreate = async (
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setProgress,
  navigate,
) => {
  // setLoading(true);

  try {
    const res = await api.post(`/tag`, {
      name: data.title,
      color: data.color,
    });

    setTimeout(() => {
      navigate("/admin/project/tag");
    }, 1000);

    // setLoading(false);
    setSuccess(true);
    setMessage("Tag criada com sucesso");
  } catch (error) {
    // setLoading(false);
    setError(true);
    setMessage("Erro ao criar tag");
  }
};
