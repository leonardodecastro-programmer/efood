import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import MenuHero from '../../components/MenuHero'
import Menu from '../../components/Menu'
import { useGetRestaurantQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

export const Restaurant = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant, isLoading } = useGetRestaurantQuery(id)

  return (
    <>
      <Header />
      <MenuHero isLoading={isLoading} restaurant={restaurant} />
      <Menu isLoading={isLoading} items={restaurant && restaurant.cardapio} />
    </>
  )
}

export default Restaurant
