import Loader from '../Loader'
import Restaurant from '../Restaurant'

import * as S from './styles'

export type Props = {
  restaurants?: Restaurant[]
  isLoading: boolean
}

export const RestaurantList = ({ restaurants, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {restaurants &&
            restaurants.map((restaurant) => (
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
        </S.List>
      </div>
    </S.Container>
  )
}

export default RestaurantList
