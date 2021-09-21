import { UserCreatorRepository } from '@/data/interfaces'
import { UserInput, UserModel } from '@/data/models'

import knex from '@/config/knex'

export class KnexUserRepository implements UserCreatorRepository {
  async createUser (user: UserInput): Promise<UserModel> {
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
}

/*
import { generateHash } from 'src/methods/HashMethods'
import { Repository, UserEntity } from '../contracts'

export class UserKnexRepository implements Repository {
  async get (userId: string): Promise<UserEntity> {
    const user: UserEntity = await knex('users').where({ id: userId })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password
    }
  }

  async getCollection (): Promise<UserEntity[]> {
    const users: UserEntity[] = await knex('users')

    return users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
  }

  async create (user: UserEntity): Promise<UserEntity> {
    const userId = await knex('users')
      .insert({
        name,
        email,
        password: hashedPassword
      })
      .returning('id')
  }

  async update (user: any): Promise<UserEntity> {
    const { id } = req.params
    const { name, email, password } = req.body
    const hashedPassword = await generateHash(password)

    await knex('users')
      .update({
        name,
        email,
        password: hashedPassword
      })
      .where({ id })
  }

  async delete (): Promise<UserEntity> {
    const { id } = req.params

    await knex('users')
      .where({ id })
      .del()
  }
}
*/
