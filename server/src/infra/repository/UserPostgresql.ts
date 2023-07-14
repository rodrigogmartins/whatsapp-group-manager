import { UserPostgres, UserRepository } from '@/data/interfaces'
import { User } from '@/domain/entities'
import knex from '@/infra/database/knex'

export class UserPostgresqlRepository implements UserRepository {
  async get(userId: string): Promise<User> {
    const user: UserPostgres = await knex('users').where({ id: userId }).first()

    return UserPostgres.mapToEntity(user)
  }

  async getFromLogin(userEmail: string): Promise<User> {
    const user: UserPostgres = await knex('users')
      .where({ email: userEmail })
      .first()

    return UserPostgres.mapToEntity(user)
  }

  async getCollection(): Promise<User[]> {
    const users: UserPostgres[] = await knex('users')

    return UserPostgres.mapCollectionToEntity(users)
  }

  async create(user: User): Promise<User> {
    const userForDatabase = {
      id: user.id,
      name: user.name,
      cpf_cnpj: user.cpfCnpj,
      email: user.email,
      password: user.password,
      email_confirmed: user.emailConfirmed
    }

    await knex('users').insert(userForDatabase)

    return user
  }

  async update(user: User): Promise<User> {
    const userForDatabase = {
      id: user.id,
      name: user.name,
      cpf_cnpj: user.cpfCnpj,
      email: user.email,
      password: user.password,
      email_confirmed: user.emailConfirmed
    }

    await knex('users').update(user).where({ id: user.id })

    return user
  }

  async delete(userId: string): Promise<void> {
    await knex('users').where({ id: userId }).del()
  }
}
