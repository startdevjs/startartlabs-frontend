import { Link, useNavigate, useParams } from "react-router-dom"
import { useMemo, useState } from "react"
import { getExerciseById } from "../functions/getExerciseById"
import { Loading, Toast } from "../../../../components"
import { Card, CardBodyText, CardHeader, Container, TitleCardHeader, Title,
  ButtonCorrection, 
  CardBody,
  CardFooter,
  CardBodyButton,
  ContainerButtons,
  CardBodyHeader,
  CardBodyTitle,
  Corrected,
  ButtonGoBack
} from "./styles"


 const ViewExercise = () => {
  const [exercise, setExercise] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()

  useMemo(() => {
    getExerciseById(id, setLoading, setExercise)
  }, [id])
  
  const copyToClipboard = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(exercise?.user?.email)

    setSuccess(true)
    setMessage("Email copiado com sucesso!")
  }

  if (loading) {
    return <Loading />
  }


  return (
    <>
    {
      success && (
        <Toast message={message} close={() => setSuccess(false)} variant="success" />
      )
    }

      <Container>
        <Title>Visualizar exercício</Title>

        <Card>
          <CardHeader>
            <TitleCardHeader>Nome: </TitleCardHeader>
            <CardBodyText>
              {exercise?.user?.name}
            </CardBodyText>

            <TitleCardHeader>Email: </TitleCardHeader>
            <CardBodyText>
              <a href="#"
                onClick={copyToClipboard}
              >
                {exercise?.user?.email}
              </a>
            </CardBodyText>


            <TitleCardHeader>Link: </TitleCardHeader>
            <CardBodyText>
              <a target="_blank" href={exercise?.link}>
                {exercise?.link?.slice(0, 30) + "..."}
              </a>
            </CardBodyText>

          </CardHeader>

          <CardHeader>
            <TitleCardHeader>Branch: </TitleCardHeader>
            <CardBodyText>
              {exercise?.branch}
            </CardBodyText>

            <TitleCardHeader>Corrigida: </TitleCardHeader>
            <Corrected
              background={
                exercise?.status === 1 ? "#ccc" : exercise?.status === 2 ? "#ffcc00" : "#57c957"
              }
            >
              {exercise?.status === 1 && "Não corrigida"}
              {exercise?.status === 2 && "Refazer"}
              {exercise?.status === 3 && "Corrigida"}
            </Corrected>
          </CardHeader>
          
       
        </Card>

        <CardFooter>
            <ContainerButtons>
              <ButtonCorrection>  
                <Link to={`/admin/exercise/update/${id}`}>
                  <a>Corrigir</a>
                </Link>
              </ButtonCorrection>

              <ButtonGoBack type="button" onClick={() => navigate("/admin/exercise")}>
                Voltar
              </ButtonGoBack>
            </ContainerButtons>
          </CardFooter>
      </Container>
    </>
  )
}

export default ViewExercise