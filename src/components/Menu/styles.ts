import styled from 'styled-components'
import { cores } from '../../styles'

type Props = {
  modal: boolean
}

export const Card = styled.div`
  color: ${cores.white};
  background-color: ${cores.salmon};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > img {
      display: block;
      width: 100%;
      height: 167px;
      object-fit: cover;
    }
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`

export const Button = styled.button<Props>`
  background-color: ${cores.pink};
  color: ${cores.salmon};
  border: none;
  font-size: 14px;
  font-weight: bold;
  width: ${({ modal }) => (modal ? '100%' : 'fit-content')};
  padding: 4px 6px;
  cursor: pointer;
  text-align: center;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  width: 100%;
  position: relative;
  padding: 32px;
  display: flex;
  gap: 24px;
  z-index: 1;
  background-color: ${cores.salmon};

  div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h1 {
  }
`

export const ModalBanner = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const Close = styled.img`
  position: absolute;
  cursor: pointer;
  height: 16px;
  width: 16px;
  top: 8px;
  right: 8px;
`
