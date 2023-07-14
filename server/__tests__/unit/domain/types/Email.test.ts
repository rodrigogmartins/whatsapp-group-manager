import { UserEmail } from '@/domain/types'

const invalidEmailFormatError = 'E-mail de formato inválido.'

describe('Email Validator Test', () => {
  describe('should return "E-mail de formato inválido."', () => {
    it('when email does not have username', () => {
      expect(() => new UserEmail('@gmail.com')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres does not have @', () => {
      expect(() => new UserEmail('rodrigogmail.com')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres end in the hostname without .com (etc)', () => {
      expect(() => new UserEmail('rodrigo@gmailcom')).toThrowError(
        invalidEmailFormatError
      )
    })

    it('when email addres ends with .', () => {
      expect(() => new UserEmail('rodrigo@gmail.')).toThrowError(
        invalidEmailFormatError
      )
    })
  })

  describe('should return TRUE', () => {
    it('when input is email address @subdomain.domain.com.br pattern', () => {
      const emailText: string = 'rodrigo.martins@gmail.teste.com.br'
      const email: UserEmail = new UserEmail(emailText)

      expect(email.toString()).toEqual(emailText)
    })

    it('when input is email address @domain.com pattern', () => {
      const emailText: string = 'rodrigo.martins@gmail.com'
      const email: UserEmail = new UserEmail(emailText)

      expect(email.toString()).toEqual(emailText)
    })
  })
})
