import { Password } from '@/domain/types'

const passwordTooShort = 'A sua senha deve conter no mínimo 8 caracteres.'
const passwordTooWeakErrorMessage =
  'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'

describe.only('Password Validator Test', () => {
  describe('should return password is too short error', () => {
    it('when password have less than 8 chars', () => {
      expect(() => new Password('Myp4$$')).toThrowError(passwordTooShort)
    })
  })

  describe('should return password is too weak error', () => {
    it('when password only have lowercase chars', () => {
      expect(() => new Password('mypassword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have uppercase chars', () => {
      expect(() => new Password('MYPASSWORD')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have numbers', () => {
      expect(() => new Password('123456789')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have simbols', () => {
      expect(() => new Password('@$!%*?&@$!%*?&')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars', () => {
      expect(() => new Password('Mypassword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars and numbers', () => {
      expect(() => new Password('Myp4ssword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })

    it('when password only have lowercase and uppercase chars and simbols', () => {
      expect(() => new Password('Myp@ssword')).toThrowError(
        passwordTooWeakErrorMessage
      )
    })
  })

  describe('should return TRUE', () => {
    it('when password is valid', () => {
      const passText = 'Myp4$$word'
      const pass: Password = new Password(passText)

      expect(pass.value).toEqual(passText)
    })
  })
})
