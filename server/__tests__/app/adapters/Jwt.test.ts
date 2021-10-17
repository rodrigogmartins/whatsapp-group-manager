import { JwtAdapter } from '@/app/adapters'
import {
  InvalidJwtSecretOrPrivateKeyError,
  InvalidJwtTokenError,
  TokenExpiredError
} from '@/app/adapters/errors'

const SECRET_KEY = 'my-secret-key'

describe('JWT Adapter Test', () => {
  describe('generateToken', () => {
    it('should create a JWT without options', () => {
      const jwtPayload = { user: 'test.only' }
      const jwt = JwtAdapter.generateToken(jwtPayload, SECRET_KEY)

      expect(jwt).not.toEqual(jwtPayload)
      expect(typeof jwt).toEqual('string')
    })

    it('should create a JWT with options', () => {
      const jwtPayload = { user: 'test.only' }
      const jwt = JwtAdapter.generateToken(jwtPayload, SECRET_KEY, {
        expiresIn: '1h'
      })

      expect(jwt).not.toEqual(jwtPayload)
      expect(typeof jwt).toEqual('string')
    })

    it('should create a JWT with options', () => {
      const jwtPayload = { user: 'test.only' }
      const jwt = JwtAdapter.generateToken(jwtPayload, SECRET_KEY, {
        expiresIn: '1h'
      })

      expect(jwt).not.toEqual(jwtPayload)
      expect(typeof jwt).toEqual('string')
    })

    describe('should return InvalidJwtSecretOrPrivateKey', () => {
      it('when try create a JWT without secret or private key', () => {
        expect(() =>
          JwtAdapter.generateToken({ user: 'test.only' }, '')
        ).toThrowError(InvalidJwtSecretOrPrivateKeyError)
      })
    })
  })

  describe('parseToken', () => {
    it('should parse a valid JWT', () => {
      const jwtPayload = { user: 'test.only' }
      const generatedToken = JwtAdapter.generateToken(jwtPayload, SECRET_KEY)

      const validatedToken = JwtAdapter.parseToken(generatedToken, SECRET_KEY)

      expect(generatedToken).not.toEqual(jwtPayload)
      expect(typeof generatedToken).toEqual('string')
      expect(typeof validatedToken).toEqual('object')
      expect(typeof validatedToken.iat).toEqual('number')
      expect(validatedToken.user).toEqual(jwtPayload.user)
    })

    describe('should return TokenExpiredError', () => {
      it('when try to parse a expired JWT', () => {
        const jwtPayload = { user: 'test.only' }
        const generatedToken = JwtAdapter.generateToken(
          jwtPayload,
          SECRET_KEY,
          {
            expiresIn: '0'
          }
        )

        expect(() =>
          JwtAdapter.parseToken(generatedToken, SECRET_KEY)
        ).toThrowError(TokenExpiredError)
      })
    })

    describe('should return InvalidJwtTokenError', () => {
      it('when try to parse a invalid JWT', () => {
        expect(() =>
          JwtAdapter.parseToken('abcdefg123', SECRET_KEY)
        ).toThrowError(InvalidJwtTokenError)
      })
    })
  })
})
