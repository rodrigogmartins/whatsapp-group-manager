export const PasswordValidator = (
  password: string,
  confirmPassword: string
): boolean => {
  const patternStrongPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]*$'
  )

  if (!patternStrongPassword.test(password)) {
    throw new Error(
      'Sua senha deve conter ao menos uma letra maiúscula, um número e um dos símbolos: (@$!%*?&).'
    )
  }

  if (password.length < 8) {
    throw new Error('A sua senha deve conter no mínimo 8 caracteres.')
  }

  if (password !== confirmPassword) {
    throw new Error('As senhas não coincidem.')
  }

  return true
}
