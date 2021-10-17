import {
  InvalidJwtSecretOrPrivateKeyError,
  InvalidJwtTokenError,
  TokenExpiredError
} from './errors'

import { verify, sign, Secret, SignOptions } from 'jsonwebtoken'

export class JwtAdapter {
  static generateToken (
    payload: object,
    secretKey: Secret,
    options?: SignOptions
  ): string {
    if (!secretKey) {
      throw new InvalidJwtSecretOrPrivateKeyError()
    }

    return sign(payload, secretKey, options)
  }

  static parseToken (token: string, secretKey: string): any {
    if (!token) {
      throw new InvalidJwtTokenError()
    }

    if (!secretKey) {
      throw new InvalidJwtSecretOrPrivateKeyError()
    }

    try {
      const parsedToken = verify(token, secretKey)

      return typeof parsedToken === 'object' ? parsedToken : {}
    } catch (error: any) {
      if (error?.name === 'JsonWebTokenError') {
        throw new InvalidJwtTokenError()
      } else if (error?.name === 'TokenExpiredError') {
        throw new TokenExpiredError()
      }

      console.log(error)
    }
  }
}

{
  TokenExpiredError
}
