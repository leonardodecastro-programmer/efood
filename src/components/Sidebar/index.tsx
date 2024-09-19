import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { closeSidebar } from '../../store/redcuers/cart'
import Cart from '../Cart'
import Checkout from '../Checkout'

import * as S from './styles'

export const Sidebar = () => {
  const { cartOpen, deliveryOpen, paymentOpen } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const HandleCloseSidebar = () => {
    dispatch(closeSidebar())
  }

  return (
    <S.SidebarContainer
      className={cartOpen || deliveryOpen || paymentOpen ? 'is-open' : ''}
    >
      <S.Overlay onClick={HandleCloseSidebar} />
      <S.SideBar>{cartOpen ? <Cart /> : <Checkout />}</S.SideBar>
    </S.SidebarContainer>
  )
}

export default Sidebar
