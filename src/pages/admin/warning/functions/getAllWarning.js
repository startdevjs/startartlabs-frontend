import api from "../../../../services/api";

export const getAllWarnings = async (setLoading, setWarnings, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/warning?skip=${skip}&take=${take}`);

    setLoading(false);
    setWarnings(data);
  } catch (error) {
    setLoading(false);
  }
};
