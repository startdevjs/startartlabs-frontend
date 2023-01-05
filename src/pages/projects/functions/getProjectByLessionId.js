import api from "../../../services/api";

export const getProjectByLessionId = async (id, setStateProjectByLessionId) => {
  try {
    const { data } = await api.get(`/project/${id}`);

    setStateProjectByLessionId(data);
  } catch (error) {}
};
