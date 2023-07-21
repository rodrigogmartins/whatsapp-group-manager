import { User } from '@/domain/User'
import { UserUpdaterCommand } from '@/domain/User/UserUpdater'

export interface UserUpdater {
  update: (user: UserUpdaterCommand) => Promise<User>
}
