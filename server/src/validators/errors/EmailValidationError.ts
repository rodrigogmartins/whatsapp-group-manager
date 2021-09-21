export class EmailValidationError extends Error {
  constructor(m: string) {
    super(m)

    Object.setPrototypeOf(this, EmailValidationError.prototype)
    Object.defineProperty(this, 'type', {
      get() {
        return 'EmailValidationError'
      }
    })
  }
}
