import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import Button from '../Button'

import * as S from './styles'

type Props = {
  titulo: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  destacado: boolean
  id: number
}

export const Restaurant = ({
  titulo,
  descricao,
  tipo,
  capa,
  avaliacao,
  destacado,
  id
}: Props) => {
  return (
    <S.Card>
      <img src={capa} alt={titulo} />
      <S.Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </S.Infos>
      <S.MainContainer>
        <div>
          <S.Container>
            <S.Title>{titulo}</S.Title>
            <S.Assessment>
              <p>{avaliacao}</p>
              <img src={estrela} alt="Avaliação" />
            </S.Assessment>
          </S.Container>
          <S.Description>{descricao}</S.Description>
        </div>
        <Button
          type="link"
          title={`Clique aqui para ver mais detalhes do restaurante: ${titulo}`}
          to={`/restaurant/${id}`}
        >
          Saiba mais
        </Button>
      </S.MainContainer>
    </S.Card>
  )
}

export default Restaurant
