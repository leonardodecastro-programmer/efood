import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()
  return (
    <>
      <Banner />
      <RestaurantList isLoading={isLoading} restaurants={restaurants} />
    </>
  )
}

export default Home
