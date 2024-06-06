import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.pink};
  padding: 40px 0;
  font-size: 10px;
  color: ${cores.salmon};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      max-width: 480px;
      text-align: center;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32.5px;
  justify-content: center;
`

export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin-bottom: 80px;
`
