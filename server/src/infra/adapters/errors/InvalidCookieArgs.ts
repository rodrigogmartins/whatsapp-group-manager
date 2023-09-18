export class InvalidCookieArgsError extends Error {
  constructor (message: string = 'O cookie deve possuir nome e valor') {
    super(message)
    this.name = 'InvalidCookieArgsError'
  }
}
