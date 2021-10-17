import { EmailValidator } from '@/domain/validators'

const invalidEmailFormatError = 'E-mail de formato inválido.'

describe('Email Validator Test', () => {
  describe('should return "E-mail de formato inválido."', () => {
    it('when email does not have username', () => {
      expect(() => EmailValidator('@gmail.com')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres does not have @', () => {
      expect(() => EmailValidator('rodrigogmail.com')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres end in the hostname without .com (etc)', () => {
      expect(() => EmailValidator('rodrigo@gmailcom')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres ends with .', () => {
      expect(() => EmailValidator('rodrigo@gmail.')).toThrowError(
        invalidEmailFormatError
      )
    })
  })

  describe('should return TRUE', () => {
    it('when input is email address @subdomain.domain.com.br pattern', () => {
      const isValidPassword = EmailValidator(
        'rodrigo.martins@gmail.teste.com.br'
      )

      expect(isValidPassword).toEqual(true)
    })

    it('when input is email address @domain.com pattern', () => {
      const isValidPassword = EmailValidator('rodrigo.martins@gmail.com')

      expect(isValidPassword).toEqual(true)
    })
  })
})
