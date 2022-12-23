import api from "../../../../services/api";

export const getAllUsers = async (setLoading, setUsers, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/user?skip=${skip}&take=${take}`);

    setLoading(false);
    setUsers(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
