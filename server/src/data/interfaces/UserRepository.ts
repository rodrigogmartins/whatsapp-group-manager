import { UserModel } from '@/data/models'

export interface UserRepository {
  get(userId: string): Promise<UserModel>
  getCollection(): Promise<UserModel[]>
  create(user: UserInput): Promise<UserModel>
  update(user: UserInput): Promise<UserModel>
  delete(userId: string): void
}

export type UserInput = {
  id: string
  name: string
  email: string
  password?: string
}
