import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#FFFFFF',
  beige: '#FFF8F2',
  salmon: '#E66767',
  pink: '#FFEBD9',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.beige};
    color: ${cores.white};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
