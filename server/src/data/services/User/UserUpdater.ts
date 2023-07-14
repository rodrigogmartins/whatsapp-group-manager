import { UserRepository, UserUpdateInput } from '@/data/interfaces'
import { User } from '@/domain/entities'
import { UserUpdater } from '@/domain/usecases'

export class UserUpdaterService implements UserUpdater {
  constructor(private readonly userRepository: UserRepository) {}

  async update(userInput: UserUpdateInput): Promise<User> {
    const user = new User(
      userInput.id,
      userInput.name,
      userInput.cpfCnpj,
      userInput.email,
      userInput.emailConfirmed,
      userInput.password
    )

    return this.userRepository.update(user)
  }
}
