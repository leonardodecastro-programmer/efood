import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.pink};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.salmon};
  padding: 32px 8px 32px 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  overflow-y: auto;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${cores.pink};
  color: ${cores.salmon};
  position: relative;
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
