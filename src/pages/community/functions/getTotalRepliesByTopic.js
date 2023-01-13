import api from "../../../services/api";

export const getTotalRepliesByTopic = async (setLoading, topicId) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/reply/${topicId}/byTopic`);

    setLoading(false);
    return data?.total;
  } catch (error) {
    setLoading(false);
  }
};
