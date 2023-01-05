import api from "../../../../services/api";

export const onCreate = async (
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setProgress,
  setProgressVideo,
  navigate,
) => {
  setLoading(true);

  try {
    const res = await api.post(`/lession`, {
      name: data.name,
      description: data.description,
      image: null,
      video: null,
      type: Number(data.type),
      projectId: Number(data.projectId),
    });

    if (data?.image !== null) {
      const formData = new FormData();
      formData.append("file", data.image[0]);

      await api.patch(`/lession/upload/image/${res?.data?.id}`, formData, {
        onUploadProgress: (progressEvent) => {
          setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        },

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    if (data?.video !== null) {
      const formData = new FormData();
      formData.append("file", data.video[0]);

      await api.patch(`/lession/upload/video/${res?.data?.id}`, formData, {
        onUploadProgress: (progressEvent) => {
          setProgressVideo(Math.round((progressEvent.loaded * 100) / progressEvent.total));
        },

        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    setTimeout(() => {
      navigate("/admin/lession");
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage("Aula criada com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao criar a aula");
  }
};
