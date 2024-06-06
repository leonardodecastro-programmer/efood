import { Link } from 'react-router-dom'

import { HeaderBar, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <nav>
      <Link to="/categories">Restaurantes</Link>
    </nav>
    <Link to="/">
      <img src={logo} alt="E-FOOD" />
    </Link>
    <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
  </HeaderBar>
)

export default Header
