import logo from '../../assets/images/logo.svg'
import instagram_logo from '../../assets/images/logo-instagram.svg'
import facebook_logo from '../../assets/images/logo-facebook.svg'
import twitter_logo from '../../assets/images/logo-twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <img src={logo} alt="E-FOOD" />
        <S.Links>
          <li>
            <S.Link title="Clique aqui para acessar o instagram">
              <img src={instagram_logo} alt="Instagram" />
            </S.Link>
          </li>
          <li>
            <S.Link title="Clique aqui para acessar o facebook">
              <img src={facebook_logo} alt="Facebook" />
            </S.Link>
          </li>
          <li>
            <S.Link title="Clique aqui para acessar o twitter">
              <img src={twitter_logo} alt="Twitter" />
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </S.Container>
)

export default Footer
