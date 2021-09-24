export interface SessionLogIn {
  logIn: (login: string, password: string) => Promise<string>
}
