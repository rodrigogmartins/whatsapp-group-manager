import React from 'react'
import ReactDOM from 'react-dom'
import {
  Container,
  Header,
  StyledModal,
  HeaderText,
  CloseButton,
  Content,
  Backdrop
} from './styles'

interface IModal {
  isShown: boolean
  hide: () => void
  headerText: string
}

const Modal: React.FC<IModal> = ({ isShown, hide, children, headerText }) => {
  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Container>
        <StyledModal>
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>{children}</Content>
        </StyledModal>
      </Container>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default Modal
