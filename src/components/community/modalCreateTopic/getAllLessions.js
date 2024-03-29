import api from "../../../services/api";

export const getAllLessions = async (setLoading, setLessions, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/lession?skip=${skip}&take=${take}`);

    setLoading(false);
    setLessions(data);
  } catch (error) {
    setLoading(false);
  }
};
