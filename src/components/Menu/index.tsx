import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import Button from '../Button'
import close from '../../assets/images/close.png'
import { add, openCart } from '../../store/redcuers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'
import Loader from '../Loader'

export type Props = {
  items?: MenuItem[]
  isLoading: boolean
}

const MenuList = ({ items, isLoading }: Props) => {
  const dispatch = useDispatch()
  const { cartOpen } = useSelector((state: RootReducer) => state.cart)

  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const closeModal = () => {
    setSelectedItem(null)
  }

  const addToCart = (item: MenuItem) => {
    dispatch(add(item))
    dispatch(openCart())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 175) {
      return descricao.slice(0, 175) + '...'
    }
    return descricao
  }

  useEffect(() => {
    if (cartOpen) {
      setSelectedItem(null)
    }
  }, [cartOpen])

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container>
      <div className="container">
        <S.List>
          {items &&
            items.map((item) => (
              <S.CardMenu key={item.id}>
                <div>
                  <img src={item.foto} alt={item.nome} />
                  <S.Title>{item.nome}</S.Title>
                  <S.Description>{getDescricao(item.descricao)}</S.Description>
                </div>
                <Button
                  type="button"
                  title={`Clique aqui para ver mais detalhes da comida: ${item.nome}`}
                  full
                  onClick={() => setSelectedItem(item)}
                >
                  Mais detalhes
                </Button>
              </S.CardMenu>
            ))}
        </S.List>
      </div>

      {selectedItem && (
        <S.Modal className="visivel">
          <S.ModalContent className="container">
            <S.Close src={close} alt="Ícone de fechar" onClick={closeModal} />
            <S.ModalBanner src={selectedItem.foto} alt={selectedItem.nome} />
            <div>
              <h1>{selectedItem.nome}</h1>
              <p>{selectedItem.descricao}</p>
              <p>Serve: {selectedItem.porcao}</p>
              <Button
                type="button"
                title="Clique aqui para adicionar esta comida"
                onClick={() => addToCart(selectedItem)}
              >
                Adicionar ao carrinho - R${selectedItem.preco}
              </Button>
            </div>
          </S.ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </S.Modal>
      )}
    </S.Container>
  )
}

export default MenuList
