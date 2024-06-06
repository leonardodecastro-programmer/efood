import { Link } from 'react-router-dom'

import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/images/banner-cutlery.png'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="E-FOOD" />
      </Link>
      <div>
        <Titulo>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Titulo>
      </div>
    </div>
  </Imagem>
)

export default Banner
