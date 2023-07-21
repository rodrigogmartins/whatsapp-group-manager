export interface UserLogin {
  login: (login: string, password: string) => Promise<string>
}
