import {
  UserInputPostgres,
  UserPostgres,
  UserRepository,
  UserUpdateInputPostgres
} from '@/data/interfaces'
import { User } from '@/domain/entities'
import knex from '@/infra/database/knex'

export class UserPostgresqlRepository implements UserRepository {
  async get (userId: string): Promise<User> {
    const user: UserPostgres = await knex('users')
      .where({ id: userId })
      .first()

    return UserPostgres.mapToEntity(user)
  }

  async getFromLogin (userEmail: string): Promise<User> {
    const user: UserPostgres = await knex('users')
      .where({ email: userEmail })
      .first()

    return UserPostgres.mapToEntity(user)
  }

  async getCollection (): Promise<User[]> {
    const users: UserPostgres[] = await knex('users')

    return UserPostgres.mapCollectionToEntity(users)
  }

  async create (user: UserInputPostgres): Promise<User> {
    await knex('users').insert(user)

    return await this.get(user.id)
  }

  async update (user: UserUpdateInputPostgres): Promise<User> {
    await knex('users')
      .update(user)
      .where({ id: user.id })

    return await this.get(user.id)
  }

  async delete (userId: string): Promise<void> {
    await knex('users')
      .where({ id: userId })
      .del()
  }
}
