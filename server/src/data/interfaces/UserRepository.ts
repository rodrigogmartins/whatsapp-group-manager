import { UserModel } from '@/data/models'
import { User } from '@/domain/entities'

export interface UserRepository {
  get(userId: string): Promise<UserModel>
  getFromLogin(userEmail: string): Promise<UserModel>
  getCollection(): Promise<UserModel[]>
  create(user: UserInputPostgres): Promise<UserModel>
  update(user: UserUpdateInputPostgres): Promise<UserModel>
  delete(userId: string): void
}

export type UserInput = {
  id: string
  name: string
  cpfCnpj: string
  email: string
  emailConfirmed: boolean
  password: string
}

export type UserUpdateInput = {
  id: string
  name?: string
  cpfCnpj?: string
  email?: string
  emailConfirmed?: boolean
  password?: string
}

export type UserInputPostgres = {
  id: string
  name: string
  cpf_cnpj: string
  email: string
  email_confirmed: boolean
  password: string
}

export type UserUpdateInputPostgres = {
  id: string
  name?: string
  cpf_cnpj?: string
  email?: string
  email_confirmed?: boolean
  password?: string
}

export class UserPostgres {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly cpf_cnpj: string,
    private readonly email: string,
    private readonly email_confirmed: boolean,
    private readonly password: string,
    private readonly created_at: Date,
    private readonly updated_at: Date
  ) {}

  static mapCollectionToEntity(users: UserPostgres[]): User[] {
    return users.map((user) => UserPostgres.mapToEntity(user))
  }

  static mapToEntity(user: UserPostgres): User {
    return new User(
      user.id,
      user.name,
      user.cpf_cnpj,
      user.email,
      user.email_confirmed,
      user.password
    )
      .setCreatedAt(user.created_at)
      .setUpdatedAt(user.updated_at)
  }
}
