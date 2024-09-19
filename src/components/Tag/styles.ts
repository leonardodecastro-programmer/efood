import styled from 'styled-components'
import { colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.salmon};
  color: ${colors.white};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
`
