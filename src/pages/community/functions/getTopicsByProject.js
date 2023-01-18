import api from "../../../services/api";

export const getTopicsByProject = async ({ setLoading, setTopicsByProject, id }) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/topic/${id}/byProject`);
    setTopicsByProject(data);
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};
