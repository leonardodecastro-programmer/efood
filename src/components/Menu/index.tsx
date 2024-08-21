import { useEffect, useState } from 'react'
import {
  Container,
  List,
  CardMenu,
  Descricao,
  Titulo,
  Button,
  Modal,
  ModalContent,
  Close,
  ModalBanner
} from './styles'
import close from '../../assets/images/close.png'
import { add, open } from '../../store/redcuers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { CardapioItem } from '../../pages/Home'
import { RootReducer } from '../../store'

export type Props = {
  items: CardapioItem[]
}

const MenuList = ({ items }: Props) => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null)

  const closeModal = () => {
    setSelectedItem(null)
  }

  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 175) {
      return descricao.slice(0, 175) + '...'
    }
    return descricao
  }

  useEffect(() => {
    if (isOpen) {
      setSelectedItem(null)
    }
  }, [isOpen])

  return (
    <Container>
      <div className="container">
        <List>
          {items.map((item) => (
            <CardMenu key={item.id}>
              <div>
                <img src={item.foto} alt={item.nome} />
                <Titulo>{item.nome}</Titulo>
                <Descricao>{getDescricao(item.descricao)}</Descricao>
              </div>
              <Button modal={true} onClick={() => setSelectedItem(item)}>
                Mais detalhes
              </Button>
            </CardMenu>
          ))}
        </List>
      </div>

      {selectedItem && (
        <Modal className="visivel">
          <ModalContent className="container">
            <Close src={close} alt="Ícone de fechar" onClick={closeModal} />
            <ModalBanner src={selectedItem.foto} alt={selectedItem.nome} />
            <div>
              <h1>{selectedItem.nome}</h1>
              <p>{selectedItem.descricao}</p>
              <p>Serve: {selectedItem.porcao}</p>
              <Button modal={false} onClick={() => addToCart(selectedItem)}>
                Adicionar ao carrinho - R${selectedItem.preco}
              </Button>
            </div>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </Container>
  )
}

export default MenuList
