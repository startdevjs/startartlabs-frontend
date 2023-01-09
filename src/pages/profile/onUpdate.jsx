import api from "../../services/api";

export const onUpdate = async (
{  userId,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  handleAvatar, 
  setAvatar
}
) => {
setLoading(true);
  try {
    if (data?.image) {
      const formData = new FormData();

      formData.append("file", data.image);

      const response = await api.patch(`/user/upload/avatar`, formData, {
        mode: "cors",
        cache: "default"
      });

      await handleAvatar(userId).then((response) => {
        setAvatar(response)
        const avatar = document.querySelector("#avatar-header"); //;
        if(avatar) {
          avatar.src = response;
        } else {
          document.querySelector("#avatar-temp-profile").src = response;
        }
      });
    }
   
    await api.put(`/user/${userId}`, {
      name: data.name,
      email: data.email
    });
 
    setLoading(false);
    setSuccess(true);
    setMessage("Informações alteradas com sucesso");
  } catch (error) {
    setLoading(false);
    setError(true);
    setMessage("Erro, tente novamente mais tarde");
  }
};
