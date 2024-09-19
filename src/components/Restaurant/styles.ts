import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  color: ${colors.salmon};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const MainContainer = styled.div`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
  padding: 8px;
  border-left: 1px solid ${colors.salmon};
  border-right: 1px solid ${colors.salmon};
  border-bottom: 1px solid ${colors.salmon};

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

export const Container = styled.div`
  gap: 16px;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Assessment = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  gap: 8px;
  size: 18px;
  color: ${colors.salmon};
`
