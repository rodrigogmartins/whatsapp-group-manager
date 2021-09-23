import { User } from '@/domain/entities'

export interface UsersCollectionLoader {
  load: () => Promise<User[]>
}
