import { User } from '@/domain/User'

export interface UserLoader {
  load: (userId: string) => Promise<User>
}
