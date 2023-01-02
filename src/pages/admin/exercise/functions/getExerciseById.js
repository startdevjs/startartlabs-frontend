import api from "../../../../services/api";

export const getExerciseById = async (id, setLoading, setExercise) => {
  setLoading(true);

  try {
    const { data } = await api.get(`/exercise/${id}`);

    setLoading(false);
    setExercise(data);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
};
