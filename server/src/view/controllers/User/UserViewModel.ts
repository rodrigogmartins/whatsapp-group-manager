import { User } from '@/domain/User'

export class UserViewModel {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly createdAt: string,
    readonly updatedAt: string
  ) {}

  static map(user: User): UserViewModel {
    return new UserViewModel(
      user.id,
      user.name,
      user.email.value,
      user.password,
      user.createdAt.toISOString(),
      user.updatedAt.toISOString()
    )
  }

  static mapCollection(users: User[]): UserViewModel[] {
    return users.map((user) => UserViewModel.map(user))
  }
}
