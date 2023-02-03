import api from "../../../services/api";

export const getCourses = async (setLoading, setProjects) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/registration/projects`);

    setLoading(false);
    setProjects(data);
  } catch (error) {
    setLoading(false);
  }
};
