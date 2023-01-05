import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../../components/admin/form";
import Select from "../../../components/select";
import Loading from "../../../components/loading";
import Toast from "../../../components/toast";
import { getExerciseById } from "./functions/getExerciseById";
import { onUpdate } from "./functions/onUpdate";
import { ContainerButtons, ButtonGoBack, ButtonSubmit } from "./styles";

const UpdateExercise = () => {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [exercise, setExercise] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getExerciseById(id, setLoading, setExercise);
  }, []);

  useMemo(() => {
    setStatus(exercise?.status);
  }, [exercise]);

  const handleSubmit = () => {
    onUpdate(id, status, setLoading, setSuccess, setError, setMessage, navigate);
  };

  return (
    <>
      {loading && <Loading />}

      {!loading && (
        <Form onSubmit={handleSubmit}>
          <Select
            text="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            error={errors?.status}
          >
            <option value={1}>Não corrigido</option>
            <option value={2}>Refazer</option>
            <option value={3}>Corrigido</option>
          </Select>

          <ContainerButtons>
            <ButtonGoBack type="button" onClick={() => navigate("/admin/exercise")}>
              Voltar
            </ButtonGoBack>
            <ButtonSubmit type="submit">Atualizar</ButtonSubmit>
          </ContainerButtons>
        </Form>
      )}

      {error && <Toast message={message} close={() => setError(false)} variant="danger" />}
      {success && <Toast message={message} close={() => setSuccess(false)} variant="success" />}
    </>
  );
};

export default UpdateExercise;
