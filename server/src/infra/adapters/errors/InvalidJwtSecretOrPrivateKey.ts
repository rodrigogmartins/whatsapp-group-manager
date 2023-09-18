export class InvalidJwtSecretOrPrivateKeyError extends Error {
  constructor (
    message: string = 'A chave secreta ou privada do JTW é obrigatória'
  ) {
    super(message)
    this.name = 'InvalidJwtSecretOrPrivateKeyError'
  }
}
