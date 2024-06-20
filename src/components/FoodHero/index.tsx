import la_dolce_vita_trattoria from '../../assets/images/la-dolce-vita-trattoria.png'
import { Banner, Infos } from './styles'
const ProductHero = () => (
  <Banner style={{ backgroundImage: `url(${la_dolce_vita_trattoria})` }}>
    <div className="container">
      <Infos>
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </Infos>
    </div>
  </Banner>
)

export default ProductHero
