import { User, UserRepository } from '@/domain/User'
import { UserUpdater, UserUpdaterCommand } from '@/domain/User/UserUpdater'

export class UserUpdaterHandler implements UserUpdater {
  constructor(private readonly userRepository: UserRepository) {}

  async update(userInput: UserUpdaterCommand): Promise<User> {
    const user = new User(
      userInput.id,
      userInput.name,
      userInput.cpfCnpj,
      userInput.email,
      userInput.password
    )

    return this.userRepository.update(user)
  }
}
