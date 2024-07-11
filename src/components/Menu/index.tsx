import { Card, Descricao, Titulo, Button } from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
}

export const Menu = ({ nome, descricao, foto }: Props) => (
  <Card>
    <div>
      <img src={foto} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Descricao>{descricao}</Descricao>
    </div>
    <Button to="/foods">Adicionar ao carrinho</Button>
  </Card>
)

export default Menu
