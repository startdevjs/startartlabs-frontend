import api from "../../../../services/api";

export const getAllWarnings = async (setLoading, setWarnings) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/warning`);

    setLoading(false);
    setWarnings(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
