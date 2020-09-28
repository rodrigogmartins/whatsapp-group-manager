import { PasswordValidator } from '../validators/PasswordValidator'

test('Password is to weak: Only lowercase chars', () => {
  expect(() => PasswordValidator('mypassword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Only uppercase chars', () => {
  expect(() => PasswordValidator('MYPASSWORD')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Only numbers', () => {
  expect(() => PasswordValidator('123456789')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Only simbols', () => {
  expect(() => PasswordValidator('@$!%*?&@$!%*?&')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Just a lowercase and uppercase chars', () => {
  expect(() => PasswordValidator('Mypassword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Just a lowercase and uppercase chars and numbers', () => {
  expect(() => PasswordValidator('Myp4ssword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Just a lowercase and uppercase chars and simbols', () => {
  expect(() => PasswordValidator('Myp@ssword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password with less than 8 chars', () => {
  expect(() => PasswordValidator('Myp4$$')).toThrowError(
    'A sua senha deve conter no mínimo 8 caracteres.'
  )
})
