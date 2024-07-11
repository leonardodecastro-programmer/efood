import { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  Button,
  Modal,
  ModalContent,
  Close,
  ModalBanner
} from './styles'
import close from '../../assets/images/close.png'

export type Props = {
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export const Menu = ({ nome, descricao, foto, preco, porcao }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 175) {
      return descricao.slice(0, 175) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <div>
          <img src={foto} alt={nome} />
          <Titulo>{nome}</Titulo>
          <Descricao>{getDescricao(descricao)}</Descricao>
        </div>
        <Button modal={true} onClick={() => setIsVisible(true)}>
          Mais detalhes
        </Button>
      </Card>
      <Modal className={isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <Close
            src={close}
            alt="Ícone de fechar"
            onClick={() => {
              closeModal()
            }}
          />
          <ModalBanner src={foto} alt="" />
          <div>
            <h1>{nome}</h1>
            <p>{descricao}</p>
            <p>Serve: {porcao}</p>
            <Button modal={false}>Adicionar ao carrinho - R${preco}</Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default Menu
