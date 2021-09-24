import { verify, sign, Secret, SignOptions } from 'jsonwebtoken'

export class JwtAdapter {
  static generateToken (
    payload: string | Buffer | object,
    secretKey: Secret,
    options?: SignOptions
  ): string {
    return sign(payload, secretKey, options)
  }

  static verifyToken (token: string, secretKey: string): object | string {
    return verify(token, secretKey)
  }
}
