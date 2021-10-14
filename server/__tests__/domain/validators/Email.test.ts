import { EmailValidator } from '@/domain/validators'

test('E-mail without username', () => {
  expect(() => EmailValidator('@gmail.com')).toThrowError(
    'E-mail de formato inválido.'
  )
})

test('E-mail without @', () => {
  expect(() => EmailValidator('rodrigogmail.com')).toThrowError(
    'E-mail de formato inválido.'
  )
})

test('E-mail ending in the hostname without .com (etc)', () => {
  expect(() => EmailValidator('rodrigo@gmailcom')).toThrowError(
    'E-mail de formato inválido.'
  )
})

test('E-mail ending with dot', () => {
  expect(() => EmailValidator('rodrigo@gmail.')).toThrowError(
    'E-mail de formato inválido.'
  )
})

test('E-mail address .com.br', () => {
  const isValidPassword = EmailValidator('rodrigo.martins@gmail.teste.com.br')

  expect(isValidPassword).toEqual(true)
})

test('Simple e-mail address', () => {
  const isValidPassword = EmailValidator('rodrigo.martins@gmail.com.br')

  expect(isValidPassword).toEqual(true)
})

test('Simple e-mail address', () => {
  const isValidPassword = EmailValidator('rodrigo@gmail.com')

  expect(isValidPassword).toEqual(true)
})
