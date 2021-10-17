export class PasswordValidationError extends Error {
  constructor (message: string = 'Senha em formato inválido') {
    super(message)
    this.name = 'PasswordValidationError'
  }
}
