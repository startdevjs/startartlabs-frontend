import api from "../../../../services/api";

export const getUserById = async (id, setLoading, setUser) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/user/${id}`);

    setLoading(false);
    setUser(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
