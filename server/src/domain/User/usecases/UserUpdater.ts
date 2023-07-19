import { UserUpdateInput } from '@/data/interfaces'
import { User } from '@/domain/User'

export interface UserUpdater {
  update: (user: UserUpdateInput) => Promise<User>
}
