import { PasswordValidationError } from '@/domain/errors'

export class Password {
  private readonly PATTERN_STRONG_PASS = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]*$'
  )

  constructor(readonly password: string) {
    if (password.length < 8) {
      throw new PasswordValidationError(
        'A sua senha deve conter no mínimo 8 caracteres.'
      )
    }

    if (!this.PATTERN_STRONG_PASS.test(password)) {
      throw new PasswordValidationError(
        'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
      )
    }
  }

  toString() {
    return this.password
  }
}
