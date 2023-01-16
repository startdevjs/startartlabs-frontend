import api from "../../../services/api";

export const getAllTopics = async (setLoading, setTopics, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/topic?skip=${skip}&take=${take}`);

    setLoading(false);
    setTopics(data);
  } catch (error) {
    setLoading(false);
  }
};
