import { Link } from 'react-router-dom'
import bannerImg from '../../assets/images/banner-cutlery.png'
import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

import { open } from '../../store/redcuers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <nav>
          <Link to="/">Restaurantes</Link>
        </nav>
        <Link to="/">
          <img src={logo} alt="E-FOOD" />
        </Link>
        <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
      </div>
    </HeaderBar>
  )
}

export default Header
