export class InvalidPasswordError extends Error {
  constructor (message: string = 'Não foi possivel realizar o login, verifique suas credenciais e tente novamente em instantes.') {
    super(message)
    this.name = 'InvalidPasswordError'
  }
}
