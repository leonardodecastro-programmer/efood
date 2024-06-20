import { Link } from 'react-router-dom'

import { Card, Descricao, Titulo, Button } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

export const Restaurant = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Link to="/foods">
      <Button>Adicionar ao carrinho</Button>
    </Link>
  </Card>
)

export default Restaurant
