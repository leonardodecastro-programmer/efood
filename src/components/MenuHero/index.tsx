import Loader from '../Loader'
import * as S from './styles'

type Props = {
  restaurant?: Restaurant
  isLoading: boolean
}

const MenuHero = ({ restaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader secondary />
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <S.Infos>
          <p>{restaurant?.tipo}</p>
          <h2>{restaurant?.titulo}</h2>
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default MenuHero
