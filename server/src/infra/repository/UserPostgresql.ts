import { UserInput, UserRepository } from '@/data/interfaces'
import { User } from '@/domain/entities'
import knex from '@/infra/database/knex'

export class UserPostgresqlRepository implements UserRepository {
  async get (userId: string): Promise<User> {
    const user: User = await knex('users')
      .where({ id: userId })
      .first()

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  async getCollection (): Promise<User[]> {
    const users: User[] = await knex('users')

    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email
    }))
  }

  async create (user: UserInput): Promise<User> {
    const knexUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password
    }

    await knex('users').insert(knexUser)

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  async update (user: UserInput): Promise<User> {
    await knex('users')
      .update(user)
      .where({ id: user.id })

    return {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }

  async delete (userId: string): Promise<void> {
    await knex('users')
      .where({ id: userId })
      .del()
  }
}
