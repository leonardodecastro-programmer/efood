import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

export const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            id={restaurant.id}
            descricao={restaurant.descricao}
            capa={restaurant.capa}
            tipo={restaurant.tipo}
            titulo={restaurant.titulo}
            avaliacao={restaurant.avaliacao}
            destacado={restaurant.destacado}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
