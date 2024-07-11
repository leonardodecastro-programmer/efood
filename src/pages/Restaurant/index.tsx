import Header from '../../components/Header'
import MenuHero from '../../components/MenuHero'
import MenuList from '../../components/MenuList'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'
import { useEffect, useState } from 'react'

export const Restaurant = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurant(res)
      })
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <MenuHero restaurant={restaurant} />
      <MenuList items={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
