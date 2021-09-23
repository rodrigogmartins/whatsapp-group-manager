import { User } from '@/domain/entities/User'
import { UserLoader } from '@/domain/usecases'
import { UserRepository } from '@/data/interfaces/UserRepository'

export class UserLoaderService implements UserLoader {
  constructor (private readonly userRepository: UserRepository) {}

  async load (userId: string): Promise<User> {
    return this.userRepository.get(userId)
  }
}
