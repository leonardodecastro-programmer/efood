import Tag from '../Tag'

import estrela from '../../assets/images/estrela.svg'

import {
  Card,
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
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 190) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
      <Container>
        <div>
          <Titulo>{titulo}</Titulo>
          <Assessment>
            <p>{avaliacao}</p>
            <img src={estrela} alt="Avaliação" />
          </Assessment>
        </div>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <Button to={`/restaurant/${id}`}>Saiba mais</Button>
      </Container>
    </Card>
  )
}

export default Restaurant
