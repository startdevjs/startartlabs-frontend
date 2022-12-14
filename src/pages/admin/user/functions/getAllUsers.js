import api from "../../../../services/api";

export const getAllUsers = async (setLoading, setUsers) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/user`);

    setLoading(false);
    setUsers(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
