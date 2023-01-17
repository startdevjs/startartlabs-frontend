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
  // setLoading(true);

  const formData = new FormData();
  formData.append("file", data?.image);

  try {
    await api.put(`/forumInfos/${id}`, {
      topic_title: data.topicTitle,
      topic_subtitle: data.topicSubtitle,
      reply_title: data.replyTitle,
      reply_subtitle: data.replySubtitle,
    });

    setTimeout(() => {
      navigate("/admin/forum");
    }, 1000);

    // setLoading(false);
    setSuccess(true);
    setMessage("Informação atualizada com sucesso");
  } catch (error) {
    // setLoading(false);
    setError(true);
    setMessage("Erro ao atualizar a informação");
  }
};
