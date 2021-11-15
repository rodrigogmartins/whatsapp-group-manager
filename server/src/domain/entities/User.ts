export class User {
  createdAt!: Date
  updatedAt!: Date

  constructor(
    readonly id: string,
    readonly name: string,
    readonly cpfCnpj: string,
    readonly email: string,
    readonly emailConfirmed: boolean = false,
    readonly password: string
  ) {}

  setCreatedAt(createdAt: Date): User {
    this.createdAt = createdAt

    return this
  }

  setUpdatedAt(updatedAt: Date): User {
    this.updatedAt = updatedAt

    return this
  }
}
