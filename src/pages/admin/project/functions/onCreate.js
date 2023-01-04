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
  setLoading(true);

  try {
    const res = await api.post(`/project`, {
      name: data.name,
      description: data.description,
      image: null,
      status: true,
    });

    if (data?.image !== null) {
      const formData = new FormData();
      formData.append("file", data?.image);

      await api.post(`/project/${res.data.id}/upload`, formData, {
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
    setMessage("Projeto criado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao criar o projeto");
  }
};
