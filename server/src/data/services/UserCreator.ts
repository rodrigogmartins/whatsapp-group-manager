import { User } from '@/domain/entities/User'
import { UserCreator } from '@/domain/usecases'
import { UserInput, UserRepository } from '@/data/interfaces/UserRepository'

export class UserCreatorService implements UserCreator {
  constructor (private readonly userRepository: UserRepository) {}

  async create (user: UserInput): Promise<User> {
    // Validações

    return this.userRepository.create(user)
  }
}
