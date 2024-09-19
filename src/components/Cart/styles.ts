import styled from 'styled-components'
import { colors } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Container = styled.div`
  display: none;

  &.cart-is-open {
    display: block;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.pink};
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.salmon};
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
