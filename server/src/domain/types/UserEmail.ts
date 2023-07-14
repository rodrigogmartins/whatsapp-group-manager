import { EmailValidationError } from '@/domain/errors'

export class UserEmail {
  private readonly PATTERN_GENERAL_EMAIL = new RegExp(
    '[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*',
    'ig'
  )

  constructor(private readonly address: string) {
    if (!this.PATTERN_GENERAL_EMAIL.test(address)) {
      throw new EmailValidationError('E-mail de formato inválido.')
    }
  }

  toString() {
    return this.address
  }
}
