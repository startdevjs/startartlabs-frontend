import api from "../../../services/api";

export const getAllMyFriends = async (setAllMyFriends, skip) => {
  try {
    const response = await api.get(`/friendship/my/friends?skip=${skip}&take=20`);
    setAllMyFriends(response);
  } catch (error) {}
};
