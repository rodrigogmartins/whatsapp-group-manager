import { User } from '@/domain/User'

export interface UsersCollectionLoader {
  load: () => Promise<User[]>
}
