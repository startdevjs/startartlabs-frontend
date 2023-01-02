import api from "../../../../services/api";

export const getAllExercises = async (setLoading, setExercises, skip, take) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/exercise?skip=${skip}&take=${take}`);

    setLoading(false);
    setExercises(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
