export class EmailValidationError extends Error {
  constructor (message: string = 'E-mail de formato inválido.') {
    super(message)
    this.name = 'EmailValidationError'
  }
}
