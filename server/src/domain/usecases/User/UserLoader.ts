import { User } from '@/domain/entities'

export interface UserLoader {
  load: (userId: string) => Promise<User>
}
