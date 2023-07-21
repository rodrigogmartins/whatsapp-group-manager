export class TokenValidationError extends Error {
  constructor(message: string = 'Token inválido, nenhum usuário informado!') {
    super(message)
    this.name = 'TokenValidationError'
  }
}
