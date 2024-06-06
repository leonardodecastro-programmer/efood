import Tag from '../Tag'

import { Card, Container, Descricao, Titulo, Infos, Button } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

export const Restaurant = ({ title, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Container>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Button>Saiba mais</Button>
    </Container>
  </Card>
)

export default Restaurant
