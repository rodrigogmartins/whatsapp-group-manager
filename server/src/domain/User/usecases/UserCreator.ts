import { UserInput } from '@/data/interfaces'
import { User } from '@/domain/User'

export interface UserCreator {
  create: (user: UserInput) => Promise<User>
}
