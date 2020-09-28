import { PasswordValidator } from '../../validators/PasswordValidator'

test('Password is to weak: Only lowercase chars', () => {
  expect(() => PasswordValidator('mypassword', 'mypassword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Only uppercase chars', () => {
  expect(() => PasswordValidator('MYPASSWORD', 'MYPASSWORD')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Only numbers', () => {
  expect(() => PasswordValidator('123456789', '123456789')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Only simbols', () => {
  expect(() =>
    PasswordValidator('@$!%*?&@$!%*?&', '@$!%*?&@$!%*?&')
  ).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Just a lowercase and uppercase chars', () => {
  expect(() => PasswordValidator('Mypassword', 'Mypassword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Just a lowercase and uppercase chars and numbers', () => {
  expect(() => PasswordValidator('Myp4ssword', 'Myp4ssword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password is to weak: Just a lowercase and uppercase chars and simbols', () => {
  expect(() => PasswordValidator('Myp@ssword', 'Myp@ssword')).toThrowError(
    'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
  )
})

test('Password with less than 8 chars', () => {
  expect(() => PasswordValidator('Myp4$$', 'Myp4$$')).toThrowError(
    'A sua senha deve conter no mínimo 8 caracteres.'
  )
})

test('Password with INCORRECT confirmation field', () => {
  expect(() => PasswordValidator('Myp4$$word', 'MypWrong4$$word')).toThrowError(
    'As senhas não coincidem.'
  )
})

test('Password with CORRECT confirmation field', () => {
  const isValidPassword = PasswordValidator('Myp4$$word', 'Myp4$$word')

  expect(isValidPassword).toEqual(true)
})
