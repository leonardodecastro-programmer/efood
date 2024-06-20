import RestaurantTypes from '../../models/RestaurantTypes'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurants: RestaurantTypes[]
}

export const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            title={restaurant.title}
            assessment={restaurant.assessment}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
