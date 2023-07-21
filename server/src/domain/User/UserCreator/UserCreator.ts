import { User } from '@/domain/User'
import { UserCreatorCommand } from '@/domain/User/UserCreator'

export interface UserCreator {
  create: (user: UserCreatorCommand) => Promise<User>
}
