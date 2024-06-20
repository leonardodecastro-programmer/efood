import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  color: ${cores.white};
  background-color: ${cores.salmon};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
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

export const Button = styled.button`
  background-color: ${cores.pink};
  color: ${cores.salmon};
  border: none;
  font-size: 14px;
  font-weight: bold;
  width: 100%;
  padding: 4px 6px;
  cursor: pointer;
`
