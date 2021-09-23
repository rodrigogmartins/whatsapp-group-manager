import { UserInput } from '@/data/interfaces'
import { User } from '@/domain/entities'

export interface UserCreator {
  create: (user: UserInput) => Promise<User>
}
