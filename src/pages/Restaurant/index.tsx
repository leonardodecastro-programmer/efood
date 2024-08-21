import Header from '../../components/Header'
import MenuHero from '../../components/MenuHero'
import Menu from '../../components/Menu'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'
import { useEffect, useState } from 'react'

import { useGetRestaurantQuery } from '../../services/api'

export const Restaurant = () => {
  const { id } = useParams()

  const { data: restaurant, isLoading } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <MenuHero restaurant={restaurant} />
      <Menu items={restaurant.cardapio} />
    </>
  )
}

export default Restaurant
