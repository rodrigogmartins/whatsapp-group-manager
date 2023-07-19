import { UserEmail } from '../types'

export class User {
  createdAt!: Date
  updatedAt!: Date
  readonly email: UserEmail

  constructor(
    readonly id: string,
    readonly name: string,
    readonly cpfCnpj: string,
    email: string,
    readonly emailConfirmed: boolean = false,
    readonly password: string
  ) {
    this.email = new UserEmail(email)
  }

  setCreatedAt(createdAt: Date): User {
    this.createdAt = createdAt

    return this
  }

  setUpdatedAt(updatedAt: Date): User {
    this.updatedAt = updatedAt

    return this
  }
}
