import api from "../../../services/api";

export const getUsersBySearch = async (setUsersBySearch, nameToSearch) => {
  try {
    const { data } = await api.get(`/friendship/search/user/?name=${nameToSearch}`);
    setUsersBySearch(data);
  } catch (error) {}
};
