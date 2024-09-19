import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
      padding: 24px 0;
    }
  }

  a,
  span {
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
    color: ${colors.salmon};
    display: flex;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
  }
`
