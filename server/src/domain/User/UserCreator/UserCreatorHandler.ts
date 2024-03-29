import { HashAdapter } from '@/infra/adapters'
import { User, UserRepository } from '@/domain/User'
import { UserCreator, UserCreatorCommand } from '@/domain/User/UserCreator'

import { v4 as UUID } from 'uuid'

export class UserCreatorHandler implements UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userInput: UserCreatorCommand): Promise<User> {
    const hashedPassword: string = await HashAdapter.generate(
      userInput.password
    )
    const userId: string = UUID()
    const user = new User(
      userId,
      userInput.name,
      userInput.email,
      hashedPassword
    )

    return this.userRepository.create(user)
  }
}
