import { UserInput, UserModel } from '@/data/models'

export interface UserCreatorRepository {
  createUser: (user: UserInput) => Promise<UserModel>
}
