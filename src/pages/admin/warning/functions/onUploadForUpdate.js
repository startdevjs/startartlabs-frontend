import api from "../../../../services/api";

export const onUploadForUpdate = async (id, data, setProgress) => {
  const formData = new FormData();
  formData.append("file", data?.image);

  try {
    await api.post(`/warning/${id}/upload`, formData, {
      onUploadProgress: (progressEvent) => {
        setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      },

      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // setTimeout(() => {
    //   navigate("/admin/warning");
    // }, 1000);

    // // setLoading(false);
    // setSuccess(true);
    // setMessage("Aviso atualizado com sucesso");
  } catch (error) {
    // setLoading(false);
    // setError(true);
    // setMessage("Erro ao atualizar aviso");
  }
};
