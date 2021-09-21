import bcrypt from 'bcrypt'

export const generateHash = async (string: string): Promise<string> => {
  const salt = await bcrypt.genSalt(parseInt(process.env.GEN_SALT!))

  return await bcrypt.hash(string, salt)
}

export const compareHash = async (
  string: string,
  hashToCompare: string
): Promise<boolean> => {
  return await bcrypt.compare(string, hashToCompare)
}
