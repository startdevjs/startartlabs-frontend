import api from "../../../../services/api";

export const onUpdate = async (
  id,
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
    await api.put(`/lession/${id}`, {
      name: data.name,
      description: data.description,
      type: Number(data.type),
      projectId: Number(data.projectId),
      videoYT: data.videoYT,
    });

    if (data?.image !== String(data?.image)) {
      if (data?.image !== null && data?.image !== "" && data?.image !== undefined) {
        const formData = new FormData();
        formData.append("file", data.image[0]);

        await api.patch(`/lession/upload/image/${id}`, formData, {
          onUploadProgress: (progressEvent) => {
            setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          },

          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    }

    if (data?.video !== String(data?.video)) {
      if (data?.video !== null && data?.video !== "" && data?.video !== undefined) {
        const formData = new FormData();
        formData.append("file", data.video[0]);

        await api.patch(`/lession/upload/video/${id}`, formData, {
          onUploadProgress: (progressEvent) => {
            setProgressVideo(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          },

          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    }

    setTimeout(() => {
      navigate("/admin/lession");
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage("Aula atualizada com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao atualizar a aula");
  }
};
