import { EmailValidationError } from '@/domain/User/errors'

export class UserEmail {
  private readonly PATTERN_GENERAL_EMAIL = new RegExp(
    '[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*',
    'ig'
  )

  constructor(readonly value: string) {
    if (!this.PATTERN_GENERAL_EMAIL.test(value)) {
      throw new EmailValidationError('E-mail de formato inválido.')
    }
  }
}
