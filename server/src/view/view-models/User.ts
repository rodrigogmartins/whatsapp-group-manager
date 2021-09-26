import { User } from '@/domain/entities'

export class UserViewModel {
  id: string | undefined
  name: string | undefined
  cpfCnpj: string | undefined
  email: string | undefined
  emailConfirmed: boolean | undefined
  password: string | undefined
  createdAt: string | undefined
  updatedAt: string | undefined

  static map (user: User): UserViewModel {
    return {
      id: user.id,
      name: user.name,
      cpfCnpj: user.cpfCnpj,
      email: user.email,
      emailConfirmed: user.emailConfirmed,
      password: user.password,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString()
    }
  }

  static mapCollection (users: User[]): UserViewModel[] {
    return users.map((user) => UserViewModel.map(user))
  }
}
