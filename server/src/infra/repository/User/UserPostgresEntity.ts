import { User } from '@/domain/User'

export class UserPostgres {
  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly created_at: Date,
    private readonly updated_at: Date
  ) {}

  static mapCollectionToEntity(users: UserPostgres[]): User[] {
    return users.map((user) => UserPostgres.mapToEntity(user))
  }

  static mapToEntity(user: UserPostgres): User {
    return new User(user.id, user.name, user.email, user.password)
      .setCreatedAt(user.created_at)
      .setUpdatedAt(user.updated_at)
  }
}
