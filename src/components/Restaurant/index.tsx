import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import {
  Card,
  MainContainer,
  Container,
  Descricao,
  Titulo,
  Infos,
  Button,
  Assessment
} from './styles'

type Props = {
  titulo: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  destacado: boolean
  id: number
}

export const Restaurant = ({
  titulo,
  descricao,
  tipo,
  capa,
  avaliacao,
  destacado,
  id
}: Props) => {
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
      <MainContainer>
        <div>
          <Container>
            <Titulo>{titulo}</Titulo>
            <Assessment>
              <p>{avaliacao}</p>
              <img src={estrela} alt="Avaliação" />
            </Assessment>
          </Container>
          <Descricao>{descricao}</Descricao>
        </div>
        <Button to={`/restaurant/${id}`}>Saiba mais</Button>
      </MainContainer>
    </Card>
  )
}

export default Restaurant
