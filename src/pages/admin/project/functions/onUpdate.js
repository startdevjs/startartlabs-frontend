import api from "../../../../services/api";

export const onUpdate = async (
  id,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  navigate,
) => {
  setLoading(true);

  const formData = new FormData();
  formData.append("file", data?.image[0]);

  try {
    await api.put(`/project/${id}`, {
      name: data.name,
      description: data.description,
      image: null,
    });

    if ((data?.image[0] !== null) | (data?.image[0] !== undefined)) {
      await api.patch(`/project/${id}`, formData, {
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
