export class PasswordValidationError extends Error {
  constructor(m: string) {
    super(m)

    Object.setPrototypeOf(this, PasswordValidationError.prototype)
    Object.defineProperty(this, 'type', {
      get() {
        return 'PasswordValidationError'
      }
    })
  }
}
