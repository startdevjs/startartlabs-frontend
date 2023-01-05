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
    const res = await api.post(`/warning`, {
      title: data.title,
      description: data.description,
      action: data.action,
      background: data.background,
      image: null,
    });

    if (data?.image !== null) {
      const formData = new FormData();
      formData.append("file", data?.image);

      await api.post(`/warning/${res.data.id}/upload`, formData, {
        onUploadProgress: (progressEvent) => {
          setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        },

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    setTimeout(() => {
      navigate("/admin/warning");
    }, 1000);

    // setLoading(false);
    setSuccess(true);
    setMessage("Aviso criado com sucesso");
  } catch (error) {
    // setLoading(false);
    setError(true);
    setMessage("Erro ao criar aviso");
  }
};
