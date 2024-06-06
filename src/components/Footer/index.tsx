import { Container, FooterSection, Link, Links } from './styles'

import logo from '../../assets/images/logo.svg'
import instagram_logo from '../../assets/images/logo-instagram.svg'
import facebook_logo from '../../assets/images/logo-facebook.svg'
import twitter_logo from '../../assets/images/logo-twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} alt="E-FOOD" />
        <Links>
          <li>
            <Link>
              <img src={instagram_logo} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook_logo} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter_logo} alt="Twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
