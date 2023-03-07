import api from "../../../services/api";

export const getLessionById = async (id, setLoading, setLession) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/lession/${id}`);

    await api.put(`/lession/${id}`, {
      views: Number(data?.views) + 1,
    });  

    setLoading(false);
    setLession(data);
  } catch (error) {
    setLoading(false);
  }
};
