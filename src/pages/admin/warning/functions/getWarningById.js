import api from "../../../../services/api";

export const getWarningById = async (id, setLoading, setWarning) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/warning/${id}`);

    setLoading(false);
    setWarning(data);
  } catch (error) {
    setLoading(false);
  }
};
