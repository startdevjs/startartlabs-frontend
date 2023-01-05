import api from "../../../../services/api";

export const getAllProjects = async (setLoading, setProjects, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/project?skip=${skip}&take=${take}`);

    setLoading(false);
    setProjects(data);
  } catch (error) {
    setLoading(false);
  }
};
