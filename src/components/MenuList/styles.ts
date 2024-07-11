import styled from 'styled-components'

import { cores } from '../../styles'
import { Card } from '../Restaurant/styles'

export const Container = styled.section`
  padding-bottom: 120px;
  background-color: ${cores.beige};

  ${Card} {
    background-color: ${cores.white};
  }
`

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 56px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
