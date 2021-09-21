export class ExemploError extends Error {
  constructor () {
    super('Mensagem de erro')
    this.name = 'ExemploError'
  }
}
