import api from "../../../services/api";

export const getAllTopics = async ({ setLoading, setTopics, skip, take, lession }) => {
  setLoading(true);

  try {
    if (lession) {
      const { data } = await api.get(`/topic/${lession}/byLession?skip=${skip}&take=${take}`);
      setTopics(data);
    } else {
      const { data } = await api.get(`/topic?skip=${skip}&take=${take}`);
      setTopics(data);
    }
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};
