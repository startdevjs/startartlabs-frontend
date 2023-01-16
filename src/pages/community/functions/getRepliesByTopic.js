import api from "../../../services/api";

export const getRepliesByTopic = async (setLoading, setReplies, id, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/reply/${id}/byTopic?skip=${skip}&take=${take}`);

    setLoading(false);
    setReplies(data);
  } catch (error) {
    setLoading(false);
  }
};
