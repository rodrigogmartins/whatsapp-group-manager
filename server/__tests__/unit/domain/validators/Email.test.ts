import { validateEmail } from '@/domain/validators'

const invalidEmailFormatError = 'E-mail de formato inválido.'

describe('Email Validator Test', () => {
  describe('should return "E-mail de formato inválido."', () => {
    it('when email does not have username', () => {
      expect(() => validateEmail('@gmail.com')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres does not have @', () => {
      expect(() => validateEmail('rodrigogmail.com')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres end in the hostname without .com (etc)', () => {
      expect(() => validateEmail('rodrigo@gmailcom')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres ends with .', () => {
      expect(() => validateEmail('rodrigo@gmail.')).toThrowError(
        invalidEmailFormatError
      )
    })
  })

  describe('should return TRUE', () => {
    it('when input is email address @subdomain.domain.com.br pattern', () => {
      const isValidPassword = validateEmail(
        'rodrigo.martins@gmail.teste.com.br'
      )

      expect(isValidPassword).toEqual(true)
    })

    it('when input is email address @domain.com pattern', () => {
      const isValidPassword = validateEmail('rodrigo.martins@gmail.com')

      expect(isValidPassword).toEqual(true)
    })
  })
})
