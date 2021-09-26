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
  id!: string
  name!: string
  cpf_cnpj!: string
  email!: string
  email_confirmed!: boolean
  password!: string
  created_at!: Date
  updated_at!: Date

  static mapToEntity (user: UserPostgres): User {
    return {
      id: user.id,
      name: user.name,
      cpfCnpj: user.cpf_cnpj,
      email: user.email,
      emailConfirmed: user.email_confirmed,
      password: user.password,
      createdAt: user.created_at,
      updatedAt: user.updated_at
    }
  }

  static mapCollectionToEntity (users: UserPostgres[]): User[] {
    return users.map((user) => UserPostgres.mapToEntity(user))
  }
}
