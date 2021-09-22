import { User } from '@/domain/entities/User'
import { UserUpdater } from '@/domain/usecases'
import { UserInput, UserRepository } from '@/data/interfaces/UserRepository'
import { generateHash } from '@/app/adapters/Cripto'

export class UserUpdaterService implements UserUpdater {
  constructor (private readonly userRepository: UserRepository) {}

  async update (user: UserInput): Promise<User> {
    if (user.password) {
      const hashedPassword = await generateHash(user.password)

      user.password = hashedPassword
    }

    return this.userRepository.update(user)
  }
}
