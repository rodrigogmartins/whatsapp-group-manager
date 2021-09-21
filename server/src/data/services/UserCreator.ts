import { User } from '@/domain/entities/User'
import { UserCreator } from '@/domain/usecases'
import {
  UserInput,
  UserRepository
} from '@/data/interfaces/UserCreatorRepository'

export class CreateUserService implements UserCreator {
  constructor (private readonly userCreatorRepository: UserRepository) {}

  async create (user: UserInput): Promise<User> {
    // Validações

    return this.userCreatorRepository.create(user)
  }
}
