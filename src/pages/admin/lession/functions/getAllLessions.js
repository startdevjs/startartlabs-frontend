import api from "../../../../services/api";

export const getAllLessions = async (setLoading, setLessions) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/lession`);

    console.log(data);

    setLoading(false);
    setLessions(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
