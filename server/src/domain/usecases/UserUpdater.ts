import { UserInput } from '@/data/interfaces'
import { User } from '@/domain/entities/User'

export interface UserUpdater {
  update: (user: UserInput) => Promise<User>
}
