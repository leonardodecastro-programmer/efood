import { BeatLoader, ClockLoader } from 'react-spinners'

import { colors } from '../../styles'

import { Container } from './styles'

type Props = {
  secondary?: boolean
}

const Loader = ({ secondary }: Props) => {
  return (
    <Container>
      {secondary ? (
        <BeatLoader color={colors.salmon} />
      ) : (
        <ClockLoader color={colors.salmon} />
      )}
    </Container>
  )
}

export default Loader
