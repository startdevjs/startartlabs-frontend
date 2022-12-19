import api from "../../../../services/api";

export const getLessionById = async (id, setLoading, setLession) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/lession/${id}`);

    setLoading(false);
    setLession(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
