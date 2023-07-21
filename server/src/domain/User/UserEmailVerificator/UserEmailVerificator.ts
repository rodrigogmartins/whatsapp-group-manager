export interface UserEmailVerificator {
  verify: (token: string, secretKey: string) => Promise<boolean>
}
