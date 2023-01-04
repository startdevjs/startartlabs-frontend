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
    await api.put(`/project/${id}`, {
      name: data.name,
      description: data.description,
      image: null,
    });

    if ((data?.image !== null) | (data?.image !== undefined)) {
      await api.post(`/project/${id}/upload`, formData, {
        onUploadProgress: (progressEvent) => {
          setProgress(progressEvent.loaded);
        },

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    setTimeout(() => {
      navigate("/admin/project");
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
