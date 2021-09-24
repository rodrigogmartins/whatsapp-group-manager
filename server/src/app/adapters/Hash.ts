import bcrypt from 'bcrypt'

export class HashAdapter {
  static async generate (string: string): Promise<string> {
    const salt = await bcrypt.genSalt(parseInt(process.env.GEN_SALT!))

    return await bcrypt.hash(string, salt)
  }

  static async compare (
    string: string,
    hashToCompare: string
  ): Promise<boolean> {
    return await bcrypt.compare(string, hashToCompare)
  }
}
