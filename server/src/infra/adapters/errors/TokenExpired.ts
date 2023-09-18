export class TokenExpiredError extends Error {
  constructor (message: string = 'O token JTW já expirou') {
    super(message)
    this.name = 'TokenExpiredError'
  }
}
