import api from "../../../services/api";

export const getForums = async (setLoading, setForums) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/forumInfos`);

    setLoading(false);
    setForums(data);
  } catch (error) {
    setLoading(false);
  }
};
