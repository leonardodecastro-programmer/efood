import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import bannerImg from '../../assets/images/banner-cutlery.png'
import logo from '../../assets/images/logo.svg'
import { openCart } from '../../store/redcuers/cart'
import { RootReducer } from '../../store'

import { HeaderBar } from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const HandleOpenCart = () => {
    dispatch(openCart())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <nav>
          <Link
            title="Clique aqui para acessar a página de restaurantes"
            to="/"
          >
            Restaurantes
          </Link>
        </nav>
        <Link title="Clique aqui para acessar a página de restaurantes" to="/">
          <img src={logo} alt="E-FOOD" />
        </Link>
        <span role="button" onClick={HandleOpenCart}>
          {items.length} produto(s) no carrinho
        </span>
      </div>
    </HeaderBar>
  )
}

export default Header
