import { User } from '@/domain/entities/User'
import { UserCreator } from '@/domain/usecases'
import { UserCreatorRepository } from '@/data/interfaces/UserCreatorRepository'
import { UserInput } from '../models'

export class UserCreatorService implements UserCreator {
  constructor (private readonly userCreatorRepository: UserCreatorRepository) {}

  async create (user: UserInput): Promise<User> {
    // Validações

    return this.userCreatorRepository.createUser(user)
  }
}
