export class InvalidJwtTokenError extends Error {
  constructor (message: string = 'O token JTW é obrigatório para a validação') {
    super(message)
    this.name = 'InvalidJwtTokenError'
  }
}
