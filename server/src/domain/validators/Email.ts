import { EmailValidationError } from '@/domain/errors'

export const validateEmail = (email: string): boolean => {
  const patternGeneralEmail = new RegExp(
    '[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*',
    'ig'
  )

  if (!patternGeneralEmail.test(email)) {
    throw new EmailValidationError('E-mail de formato inválido.')
  }

  return true
}
