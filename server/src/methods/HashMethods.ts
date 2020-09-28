import bcrypt from 'bcrypt'

export const generateHash = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(parseInt(process.env.GEN_SALT!))

  return await bcrypt.hash(password, salt)
}

export const compareHash = async (
  string: string,
  hashToCompare: string
): Promise<boolean> => {
  return await bcrypt.compare(string, hashToCompare)
}
