import api from "../../../../services/api";

export const onCreate = async (data, setLoading, setSuccess, setError, setMessage, navigate) => {
  // setLoading(true);

  try {
    const res = await api.post(`/forumInfos`, {
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
    setMessage("Informação criada com sucesso");
  } catch (error) {
    // setLoading(false);
    setError(true);
    setMessage("Erro ao criar a informação");
  }
};
