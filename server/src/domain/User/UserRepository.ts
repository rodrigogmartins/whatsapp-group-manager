import { User } from '@/domain/User'

export interface UserRepository {
  get(userId: string): Promise<User>
  getFromLogin(userEmail: string): Promise<User>
  getCollection(): Promise<User[]>
  create(user: User): Promise<User>
  update(user: User): Promise<User>
  delete(userId: string): void
}
