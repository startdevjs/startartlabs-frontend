import api from "../../../services/api";

export const getFriendshipRequests = async (setReceivedFriendshipRequests) => {
  try {
    let friendshipRequest = [];
    const response = await api.get(`/friendship/my/requests/orders`);
    if (response?.data)
      [
        response.data.map(async (user) => {
          const { data } = await api.get(`/user/${user?.user}`);
          friendshipRequest.push({ ...data, friendshipId: user.id });
        }),
      ];
    setReceivedFriendshipRequests(friendshipRequest);
  } catch (error) {}
};
