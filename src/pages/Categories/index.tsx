import RestaurantList from '../../components/RestaurantList'
import Game from '../../models/Game'

import resident from '../../assets/images/hioki-sushi.png'

const promocoes: Game[] = [
  {
    id: 1,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    infos: ['5%', 'R$ 290,00'],
    image: resident
  },
  {
    id: 3,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    infos: ['10%', 'R$ 250'],
    image: resident
  },
  {
    id: 4,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    infos: ['10%', 'R$ 250'],
    image: resident
  },
  {
    id: 5,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    infos: ['10%', 'R$ 250'],
    image: resident
  },
  {
    id: 6,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    infos: ['10%', 'R$ 250'],
    image: resident
  }
]

export const Categories = () => (
  <>
    <RestaurantList games={promocoes} background="gray" />
    <RestaurantList games={promocoes} background="black" />
    <RestaurantList games={promocoes} background="gray" />
    <RestaurantList games={promocoes} background="black" />
  </>
)

export default Categories
