import api from "../../../services/api";

export const getAllLessions = async (setLoading, setLessions, projectId, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/lession/${projectId}/byProject?skip=${skip}&take=${take}`);

    setLoading(false);
    setLessions(data);
  } catch (error) {
    setLoading(false);
  }
};
