import Game from '../../models/Game'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  background: 'gray' | 'black'
  games: Game[]
}

export const RestaurantList = ({ background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {games.map((game) => (
          <Restaurant
            key={game.id}
            description={game.description}
            image={game.image}
            infos={game.infos}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
