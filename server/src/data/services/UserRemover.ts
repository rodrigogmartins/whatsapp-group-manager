import { User } from '@/domain/entities/User'
import { UserRemover } from '@/domain/usecases'
import { UserRepository } from '@/data/interfaces/UserRepository'

export class UserRemoverService implements UserRemover {
  constructor (private readonly userRepository: UserRepository) {}

  async remove (userId: string): Promise<void> {
    this.userRepository.delete(userId)
  }
}
