import knex from '@config/knex'
import { Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

const EmailController = {
  async confirmEmail(req: Request, res: Response): Promise<Response<any>> {
    const { token } = req.params

    try {
      const { user }: any = verify(token, process.env.EMAIL_SECRET!)

      if (!user) {
        throw new Error('Token inválido, nenhum usuário informado!')
      }

      await knex('users').update({ confirmed: true }).where({ id: user })

      return res
        .status(200)
        .json({ message: 'Verificação realizada com sucesso' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        message:
          'Não foi possivel realizar a confirmação de email, verifique o endereço informado e tente novamente.'
      })
    }
  }
}

export { EmailController }
