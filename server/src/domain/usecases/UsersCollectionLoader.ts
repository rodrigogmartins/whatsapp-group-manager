import { User } from '@/domain/entities/User'

export interface UsersCollectionLoader {
  load: () => Promise<User[]>
}
