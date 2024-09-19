import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import Delivery from './components/Delivery'
import Payment from './components/Payment'

const Checkout = () => {
  const { deliveryOpen } = useSelector((state: RootReducer) => state.cart)

  return deliveryOpen ? <Delivery /> : <Payment />
}

export default Checkout
