import { User } from '@/domain/entities'

export class UserViewModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly cpfCnpj: string,
    readonly email: string,
    readonly emailConfirmed: boolean,
    readonly password: string,
    readonly createdAt: string,
    readonly updatedAt: string
  ) {}

  static map(user: User): UserViewModel {
    return new UserViewModel(
      user.id,
      user.name,
      user.cpfCnpj,
      user.email,
      user.emailConfirmed,
      user.password,
      user.createdAt.toISOString(),
      user.updatedAt.toISOString()
    )
  }

  static mapCollection(users: User[]): UserViewModel[] {
    return users.map((user) => UserViewModel.map(user))
  }
}
