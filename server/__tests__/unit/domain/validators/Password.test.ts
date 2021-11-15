import { validatePassword } from '@/domain/validators'

const passwordTooShort = 'A sua senha deve conter no mínimo 8 caracteres.'
const passwordTooWeakErrorMessage =
  'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'

describe('Password Validator Test', () => {
  describe('should return password is too short error', () => {
    it('when password have less than 8 chars', () => {
      expect(() => validatePassword('Myp4$$')).toThrowError(passwordTooShort)
    })
  })

  describe('should return password is too weak error', () => {
    it('when password only have lowercase chars', () => {
      expect(() => validatePassword('mypassword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have uppercase chars', () => {
      expect(() => validatePassword('MYPASSWORD')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have numbers', () => {
      expect(() => validatePassword('123456789')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have simbols', () => {
      expect(() => validatePassword('@$!%*?&@$!%*?&')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars', () => {
      expect(() => validatePassword('Mypassword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars and numbers', () => {
      expect(() => validatePassword('Myp4ssword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars and simbols', () => {
      expect(() => validatePassword('Myp@ssword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })
  })

  describe('should return TRUE', () => {
    it('when password is valid', () => {
      expect(validatePassword('Myp4$$word')).toEqual(true)
    })
  })
})
