import api from "../../../../services/api";

export const getAllProjectTags = async (setLoading, setProjectTags) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/tag`);

    setLoading(false);
    setProjectTags(data);
  } catch (error) {
    setLoading(false);
  }
};
