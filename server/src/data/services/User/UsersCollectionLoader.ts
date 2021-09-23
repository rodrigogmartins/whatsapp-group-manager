import { User } from '@/domain/entities/User'
import { UsersCollectionLoader } from '@/domain/usecases'
import { UserRepository } from '@/data/interfaces/UserRepository'

export class UsersCollectionLoaderService implements UsersCollectionLoader {
  constructor (private readonly userRepository: UserRepository) {}

  async load (): Promise<User[]> {
    return this.userRepository.getCollection()
  }
}
