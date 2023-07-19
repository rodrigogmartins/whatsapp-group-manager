import { UserRemover } from '@/domain/User/usecases'
import { UserRepository } from '@/data/interfaces'

export class UserRemoverService implements UserRemover {
  constructor(private readonly userRepository: UserRepository) {}

  async remove(userId: string): Promise<void> {
    this.userRepository.delete(userId)
  }
}
