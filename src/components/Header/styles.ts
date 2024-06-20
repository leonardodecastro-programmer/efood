import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 171px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: ${cores.white};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    color: ${cores.salmon};
  }

  div {
    display: flex;
    align-items: center;
  }
`
