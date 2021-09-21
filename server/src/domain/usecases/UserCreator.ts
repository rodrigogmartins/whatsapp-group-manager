import { UserInput } from '@/data/interfaces'
import { User } from '@/domain/entities/User'

export interface UserCreator {
  create: (user: UserInput) => Promise<User>
}
