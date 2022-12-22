import api from "../../../services/api";

export const getProjectById = async (id, setLoading, setProject) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/project/${id}`);

    setLoading(false);
    setProject(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
