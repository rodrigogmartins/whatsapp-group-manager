export type UserInput = {
  id?: string
  name: string
  cpfCnpj: string
  email: string
  password: string
}

export type UserUpdateInput = {
  id: string
  name: string
  cpfCnpj: string
  email: string
  emailConfirmed: boolean
  password: string
}
