import api from "../../../../services/api";

export const getProjectTagById = async (id) => {
  // setLoading(true);

  try {
    const { data } = await api.get(`/tag/${id}`);

    // setLoading(false);
    // setProjectTag(data);
    return data;
  } catch (error) {
    // setLoading(false);
  }
};
