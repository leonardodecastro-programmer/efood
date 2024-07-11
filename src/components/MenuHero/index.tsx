import { Restaurante } from '../../pages/Home'
import { Banner, Infos } from './styles'

type Props = {
  restaurant: Restaurante
}

const MenuHero = ({ restaurant }: Props) => (
  <Banner style={{ backgroundImage: `url(${restaurant?.capa})` }}>
    <div className="container">
      <Infos>
        <p>{restaurant?.tipo}</p>
        <h2>{restaurant?.titulo}</h2>
      </Infos>
    </div>
  </Banner>
)

export default MenuHero
