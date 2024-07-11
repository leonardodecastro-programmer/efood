import { Modal, ModalContent } from './styles'

type Props = {
  isVisible: boolean
}

export const Details = ({ isVisible }: Props) => {
  return (
    <Modal className={isVisible ? 'visivel' : ''}>
      <ModalContent className="container">
        <img src="" alt="" />
        <h1></h1>
        <p></p>
        <div>
          <p></p>
          <button></button>
        </div>
      </ModalContent>
      <div></div>
    </Modal>
  )
}

export default Details
