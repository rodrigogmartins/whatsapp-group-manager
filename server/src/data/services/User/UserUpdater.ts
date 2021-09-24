import { User } from '@/domain/entities/User'
import { UserUpdater } from '@/domain/usecases'
import { UserRepository, UserUpdateInput } from '@/data/interfaces'
import { HashAdapter } from '@/app/adapters'

export class UserUpdaterService implements UserUpdater {
  constructor (private readonly userRepository: UserRepository) {}

  async update (user: UserUpdateInput): Promise<User> {
    if (user.password) {
      const hashedPassword = await HashAdapter.generate(user.password)

      user.password = hashedPassword
    }

    return this.userRepository.update(user)
  }
}
