import api from "../../../services/api";

export const getAllMySentRequests = async (setSentFriendshipRequests) => {
  try {
    const response = await api.get(`/friendship/my/requests`);
    if (setSentFriendshipRequests) {
      setSentFriendshipRequests(response?.data);
    }
    return response.data;
  } catch (error) {}
};
