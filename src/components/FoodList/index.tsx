import FoodTypes from '../../models/FoodTypes'
import Food from '../Food'

import { Container, List } from './styles'

export type Props = {
  foods: FoodTypes[]
}

export const FoodList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Food
            key={food.id}
            description={food.description}
            image={food.image}
            title={food.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodList
