import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  background-color: ${colors.pink};
  color: ${colors.salmon};
  border: none;
  font-size: 14px;
  font-weight: bold;
  width: ${({ full }) => (full ? '100%' : 'fit-content')};
  padding: 4px 6px;
  cursor: pointer;
  text-align: center;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.salmon};
  color: ${colors.pink};
  border: none;
  width: fit-content;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`
