import api from "../../../services/api";

export const getAllWarnings = async (setLoadingWarning, setWarnings) => {
  setLoadingWarning(true);

  try {
    const { data } = await api.get(`/warning`);

    setLoadingWarning(false);
    setWarnings(data);
  } catch (error) {
    setLoadingWarning(false);
  }
};
