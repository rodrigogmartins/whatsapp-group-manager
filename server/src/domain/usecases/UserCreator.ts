import { UserInput } from '@/data/models'
import { User } from '@/domain/entities/User'

export interface UserCreator {
  create: (user: UserInput) => Promise<User>
}
