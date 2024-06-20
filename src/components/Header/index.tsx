import { Link } from 'react-router-dom'
import bannerImg from '../../assets/images/banner-cutlery.png'
import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <nav>
        <Link to="/">Restaurantes</Link>
      </nav>
      <Link to="/">
        <img src={logo} alt="E-FOOD" />
      </Link>
      <a href="#">0 produto(s) no carrinho</a>
    </div>
  </HeaderBar>
)

export default Header
