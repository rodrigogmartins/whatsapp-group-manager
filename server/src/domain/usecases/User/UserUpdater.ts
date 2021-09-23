import { UserInput } from '@/data/interfaces'
import { User } from '@/domain/entities'

export interface UserUpdater {
  update: (user: UserInput) => Promise<User>
}
