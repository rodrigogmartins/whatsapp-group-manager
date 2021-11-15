import { HashAdapter } from '@/app/adapters'
import { UserRepository, UserUpdateInput } from '@/data/interfaces'
import { User } from '@/domain/entities'
import { UserUpdater } from '@/domain/usecases'
import { validateEmail, validatePassword } from '@/domain/validators'

export class UserUpdaterService implements UserUpdater {
  constructor(private readonly userRepository: UserRepository) {}

  async update(user: UserUpdateInput): Promise<User> {
    if (user.password) {
      validatePassword(user.password)
      const hashedPassword = await HashAdapter.generate(user.password)

      user.password = hashedPassword
    }

    if (user.email) {
      validateEmail(user.email)
    }

    return this.userRepository.update(user)
  }
}
