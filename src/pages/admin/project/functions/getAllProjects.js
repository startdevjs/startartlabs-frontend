import api from "../../../../services/api";

export const getAllProjects = async (setLoading, setProjects) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/project`);

    setLoading(false);
    setProjects(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
