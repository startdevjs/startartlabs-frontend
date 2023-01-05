import api from "../../services/api";

export const onUpdate = async (
  userId,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
) => {
  setLoading(true);
  try {
    await api.put(`/user/${userId}`, {
      name: data.name,
      email: data.email
    });

    if ((data?.image !== null) | (data?.image !== undefined)) {
      const formData = new FormData();

      formData.append("file", data.image);

      const response = await api.patch(`/user/upload/avatar`, formData, {
        mode: "cors",
        cache: "default"
      });
    }
    setLoading(false);
    setSuccess(true);
    setMessage("Informações alteradas com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro, tente novamente mais tarde");
  }
};
