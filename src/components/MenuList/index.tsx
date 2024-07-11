import { CardapioItem } from '../../pages/Home'
import Menu from '../Menu'

import { Container, List } from './styles'

export type Props = {
  items: CardapioItem[]
}

export const MenuList = ({ items }: Props) => (
  <Container>
    <div className="container">
      <List>
        {items.map((item) => (
          <Menu
            key={item.id}
            descricao={item.descricao}
            foto={item.foto}
            nome={item.nome}
            porcao={item.porcao}
            preco={item.preco}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList
