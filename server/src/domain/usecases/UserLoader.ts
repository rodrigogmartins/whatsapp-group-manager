import { User } from '@/domain/entities/User'

export interface UserLoader {
  load: (userId: string) => Promise<User>
}
