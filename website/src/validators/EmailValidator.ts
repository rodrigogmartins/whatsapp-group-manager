export const EmailValidator = (email: string): boolean => {
  const patternGeneralEmail = new RegExp(
    '[A-Za-z0-9\\._-]+@[A-Za-z0-9]+\\..(\\.[A-Za-z]+)*',
    'ig'
  )

  if (!patternGeneralEmail.test(email)) {
    throw new Error('E-mail de formato inválido.')
  }

  return true
}
