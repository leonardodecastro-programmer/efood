import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  color: ${cores.salmon};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Container = styled.div`
  background-color: ${cores.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px;
  border-left: 1px solid ${cores.salmon};
  border-right: 1px solid ${cores.salmon};
  border-bottom: 1px solid ${cores.salmon};

  div {
    display: flex;
    justify-content: space-between;
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

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Button = styled(Link)`
  background-color: ${cores.salmon};
  color: ${cores.pink};
  border: none;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`

export const Assessment = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 8px;
  size: 18px;
  color: ${cores.salmon};
`
