import styled from 'styled-components'

import { cores } from '../../styles'
import { Card } from '../Restaurant/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  background-color: ${cores.pink};

  img {
    display: block;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h1 {
  }
`
