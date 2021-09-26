import { User } from '@/domain/entities'
import { UserLoader } from '@/domain/usecases'
import { UserRepository } from '@/data/interfaces'

export class UserLoaderService implements UserLoader {
  constructor (private readonly userRepository: UserRepository) {}

  async load (userId: string): Promise<User> {
    return this.userRepository.get(userId)
  }
}
