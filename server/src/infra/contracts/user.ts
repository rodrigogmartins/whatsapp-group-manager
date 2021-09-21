export interface Repository {
  get(userId: string): Promise<UserEntity>
  getCollection(): Promise<UserEntity[]>
  create(user: any): Promise<UserEntity>
  update(user: any): Promise<UserEntity>
  delete(): Promise<UserEntity>
}

export interface UserEntity {
  id: string
  name: string
  email: string
  password: string
}
