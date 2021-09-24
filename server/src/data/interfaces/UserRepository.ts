import { UserModel } from '@/data/models'

export interface UserRepository {
  get(userId: string): Promise<UserModel>
  getFromLogin(userEmail: string): Promise<UserModel>
  getCollection(): Promise<UserModel[]>
  create(user: UserInput): Promise<UserModel>
  update(user: UserUpdateInput): Promise<UserModel>
  delete(userId: string): void
}

export type UserInput = {
  id: string
  name: string
  email: string
  emailConfirmed?: boolean
  password?: string
}

export type UserUpdateInput = {
  id: string
  name?: string
  email?: string
  emailConfirmed?: boolean
  password?: string
}
