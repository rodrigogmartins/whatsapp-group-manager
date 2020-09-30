import React, { useState } from 'react'
import InputWrapper from 'src/components/Input/Input'
import { PasswordValidator } from 'src/validators/PasswordValidator'
import { Container, ErrorMessage } from './styles'
import api from '../../../services/api'
import { Button } from 'src/components/Button/Button'
import { useHistory } from 'react-router-dom'

const SigninSignupForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formError, setFormError] = useState('')
  const [emailFieldError, setEmailFieldError] = useState('')
  const [passwordFieldError, setPasswordFieldError] = useState('')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userConfirmPassword, setUserConfirmPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const history = useHistory()

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setFormError('')
      setEmailFieldError('')
      setPasswordFieldError('')

      if (isSubmitting) return

      setIsSubmitting(true)

      if (isSignUp) {
        PasswordValidator(userPassword, userConfirmPassword)

        api
          .post('/api/auth/signup', {
            name: userName,
            email: userEmail,
            password: userPassword
          })
          .then(() => {
            setIsSubmitting(false)
            history.push('/groups')
          })
          .catch((error) => {
            setIsSubmitting(false)

            if (error.type === 'EmailValidationError') {
              setEmailFieldError(error.message)
            } else if (error.type === 'PasswordValidationError') {
              setPasswordFieldError(error.message)
            } else {
              setFormError(error.message)
            }
          })
      }

      api
        .post('/api/auth/signin', { email: userEmail, password: userPassword })
        .then((res) => {
          setIsSubmitting(false)
          history.push('/groups')
        })
        .catch((error) => {
          setIsSubmitting(false)

          if (error.type === 'EmailValidationError') {
            setEmailFieldError(error.message)
          } else if (error.type === 'PasswordValidationError') {
            setPasswordFieldError(error.message)
          } else {
            setFormError(error.message)
          }
        })
    } catch (error) {
      setIsSubmitting(false)

      if (error.type === 'EmailValidationError') {
        setEmailFieldError(error.message)
      } else if (error.type === 'PasswordValidationError') {
        setPasswordFieldError(error.message)
      } else {
        setFormError(error.message)
      }
    }
  }

  return (
    <Container onSubmit={(e) => submitForm(e)}>
      <h1>{isSignUp ? 'Efetue seu Cadastro' : 'Efetue seu Login'}</h1>
      {formError && <ErrorMessage>Erro: {formError}</ErrorMessage>}
      {isSignUp && (
        <InputWrapper
          label="Nome"
          type="text"
          required
          onChangeHandler={(e) => setUserName(e.target.value)}
        />
      )}
      {emailFieldError && <ErrorMessage>{emailFieldError}</ErrorMessage>}
      <InputWrapper
        label="E-mail"
        type="email"
        required
        onChangeHandler={(e) => setUserEmail(e.target.value)}
      />
      {passwordFieldError && <ErrorMessage>{passwordFieldError}</ErrorMessage>}
      <InputWrapper
        label="Senha"
        type="password"
        required
        onChangeHandler={(e) => setUserPassword(e.target.value)}
      />
      {isSignUp && (
        <InputWrapper
          label="Confirmar senha"
          type="password"
          required
          onChangeHandler={(e) => setUserConfirmPassword(e.target.value)}
        />
      )}
      <Button type="submit" isPrimaryColor>
        {isSignUp ? 'Cadastrar' : 'Entrar'}
      </Button>
      <Button
        type="button"
        onClick={(e) => {
          setFormError('')
          setPasswordFieldError('')
          setIsSignUp(!isSignUp)
        }}
      >
        {isSignUp ? 'Entrar' : 'Cadastrar'}
      </Button>
    </Container>
  )
}

export default SigninSignupForm
