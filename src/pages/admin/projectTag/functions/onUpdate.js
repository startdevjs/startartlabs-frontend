import api from "../../../../services/api";
import { onUploadForUpdate } from "./onUploadForUpdate";

export const onUpdate = async (
  id,
  data,
  setLoading,
  setSuccess,
  setError,
  setMessage,
  setProgress,
  navigate,
) => {
  
  try {
    await api.put(`/tag/${id}`, {
      name: data.title,
      color: data.color,
    });

    setTimeout(() => {
      navigate("/admin/project/tag");
    }, 1000);

    // setLoading(false);
    setSuccess(true);
    setMessage("Tag atualizado com sucesso");
  } catch (error) {
    // setLoading(false);
    setError(true);
    setMessage("Erro ao atualizar tag");
  }
};
