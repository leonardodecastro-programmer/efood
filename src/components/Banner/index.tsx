import { Link } from 'react-router-dom'

import bannerImg from '../../assets/images/banner-cutlery.png'
import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Banner = () => (
  <S.Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Link title="Clique aqui para acessar a página home" to="/">
        <img src={logo} alt="E-FOOD" />
      </Link>
      <div>
        <S.Title>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </S.Title>
      </div>
    </div>
  </S.Image>
)

export default Banner
