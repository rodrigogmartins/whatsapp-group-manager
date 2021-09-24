import { UserUpdateInput } from '@/data/interfaces'
import { User } from '@/domain/entities'

export interface UserUpdater {
  update: (user: UserUpdateInput) => Promise<User>
}
