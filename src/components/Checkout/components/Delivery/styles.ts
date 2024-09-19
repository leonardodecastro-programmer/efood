import styled from 'styled-components'
import { colors } from '../../../../styles'

export const Container = styled.div`
  display: none;

  h1 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
    color: ${colors.pink};
  }

  &.delivery-is-open {
    display: block;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
    color: ${colors.pink};
  }

  input {
    height: 32px;
    border: 0;
    background-color: ${colors.pink};
    padding: 0 8px;
    font-size: 14px;
    font-weight: 700;
    width: 100%;

    &.error {
      border: 3px solid red;
    }
  }
`

export const Column = styled.div`
  display: flex;
  gap: 34px;
`

export const RedirectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`
