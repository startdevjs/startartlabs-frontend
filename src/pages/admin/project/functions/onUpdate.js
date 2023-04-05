import api from "../../../../services/api";

const whiteLabel = JSON.parse(localStorage.getItem("whiteLabel"));

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
    });

    if (data?.tags?.length > 0) {
      console.log("TESTE",data.tags);
      data.tags.forEach(async (tag) => {
        await api.put(`/projectTag/project/${id}/tag/${tag.id}`, {
          tagId: tag.id,
          projectId: Number(id),
        });
      });
    }

    if (data?.image !== String(data?.image)) {
      if ((data?.image !== null) | (data?.image !== undefined)) {
        await api.post(`/project/${id}/upload`, formData, {
          onUploadProgress: (progressEvent) => {
            setProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          },

          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }
    }

    setTimeout(() => {
      navigate("/admin/project");
    }, 1000);

    setLoading(false);
    setSuccess(true);
    setMessage(whiteLabel?.payment ? "Curso" + " atualizado com sucesso" : "Projeto" + " atualizado com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro ao atualizar o " + whiteLabel?.payment ? "curso" : "projeto");
  } 
};
