import { PasswordValidator } from '@/domain/validators'

const passwordTooShort = 'A sua senha deve conter no mínimo 8 caracteres.'
const passwordTooWeakErrorMessage =
  'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'

describe('Password Validator Test', () => {
  describe('should return password is too short error', () => {
    it('when password have less than 8 chars', () => {
      expect(() => PasswordValidator('Myp4$$')).toThrowError(passwordTooShort)
    })
  })

  describe('should return password is too weak error', () => {
    it('when password only have lowercase chars', () => {
      expect(() => PasswordValidator('mypassword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have uppercase chars', () => {
      expect(() => PasswordValidator('MYPASSWORD')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have numbers', () => {
      expect(() => PasswordValidator('123456789')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have simbols', () => {
      expect(() => PasswordValidator('@$!%*?&@$!%*?&')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars', () => {
      expect(() => PasswordValidator('Mypassword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars and numbers', () => {
      expect(() => PasswordValidator('Myp4ssword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars and simbols', () => {
      expect(() => PasswordValidator('Myp@ssword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })
  })

  describe('should return TRUE', () => {
    it('when password is valid', () => {
      expect(PasswordValidator('Myp4$$word')).toEqual(true)
    })
  })
})
