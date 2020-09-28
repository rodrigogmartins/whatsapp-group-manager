import React from 'react'
import SigninSignupForm from 'src/components/Forms/SigninSignupForm/SigninSignupForm'
import { Container, Banner, ContainerTexto, FormContainer } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Banner>
        <ContainerTexto>
          <h1>Bem-vindo ao Whatsapp Group Mananger!</h1>
          <p>
            Aqui você pode gerenciar seus grupos de Whatsapp de lançamentos de
            maneira simples e eficiente.
          </p>
          <p>O que você esta esperando? Crie sua conta agora!</p>
        </ContainerTexto>
      </Banner>
      <FormContainer>
        <SigninSignupForm />
      </FormContainer>
    </Container>
  )
}

export default Home
