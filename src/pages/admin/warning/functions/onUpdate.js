import api from "../../../../services/api";

export const onUpdate = async (
  id,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setProgress,
  navigate,
) => {
  setLoading(true);

  const formData = new FormData();
  formData.append("file", data?.image);

  try {
    await api.put(`/warning/${id}`, {
      title: data.title,
      description: data.description,
      action: data.action,
      background: data.background,
      image: null,
    });

    if ((data?.image !== null) | (data?.image !== undefined)) {
      await api.post(`/warning/${id}/upload`, formData, {
        onUploadProgress: (progressEvent) => {
          setProgress(progressEvent.loaded);
        },

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

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
