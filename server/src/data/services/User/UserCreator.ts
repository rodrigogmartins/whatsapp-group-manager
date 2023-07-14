import { HashAdapter } from '@/app/adapters'
import { UserInput, UserRepository } from '@/data/interfaces'
import { User } from '@/domain/entities'
import { UserCreator } from '@/domain/usecases'
import { validatePassword } from '@/domain/validators'
import { v4 as UUID } from 'uuid'

export class UserCreatorUsecase implements UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async create(userInput: UserInput): Promise<User> {
    validatePassword(userInput.password)
    const hashedPassword: string = await HashAdapter.generate(
      userInput.password
    )
    const userId: string = UUID()
    const user = new User(
      userId,
      userInput.name,
      userInput.cpfCnpj,
      userInput.email,
      false,
      hashedPassword
    )

    return this.userRepository.create(user)
  }
}
