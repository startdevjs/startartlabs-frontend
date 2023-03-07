import api from "../../../services/api";

export const getTopic = async (setLoading, setTopic, id) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/topic/${id}`);

    setLoading(false);
    setTopic(data);
  } catch (error) {
    setLoading(false);
  }
};
