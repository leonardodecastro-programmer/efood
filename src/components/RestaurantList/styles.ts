import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../Restaurant/styles'

export const Container = styled.section<Omit<Props, 'titulo' | 'restaurants'>>`
  padding-bottom: 120px;
  background-color: ${cores.beige};

  ${Card} {
    background-color: ${cores.white};
  }
`

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
  grid-row-gap: 48px;
  margin-top: 80px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
