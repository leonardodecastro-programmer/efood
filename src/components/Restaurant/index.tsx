import { Link } from 'react-router-dom'
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
  title: string
  description: string
  infos: string[]
  image: string
  assessment: number
}

export const Restaurant = ({
  title,
  description,
  infos,
  image,
  assessment
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <div>
        <Titulo>{title}</Titulo>
        <Assessment>
          <p>{assessment}</p>
          <img src={estrela} alt="" />
        </Assessment>
      </div>
      <Descricao>{description}</Descricao>
      <Link to="/foods">
        <Button>Saiba mais</Button>
      </Link>
    </Container>
  </Card>
)

export default Restaurant
