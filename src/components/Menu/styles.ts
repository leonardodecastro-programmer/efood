import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  color: ${cores.white};
  background-color: ${cores.salmon};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > img {
      display: block;
      width: 100%;
      height: 267px;
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

export const Button = styled(Link)`
  background-color: ${cores.pink};
  color: ${cores.salmon};
  border: none;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`
