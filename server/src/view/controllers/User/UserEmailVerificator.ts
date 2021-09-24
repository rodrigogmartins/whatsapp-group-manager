import { UserEmailVerificator } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'

export class UserEmailVerificatorController implements Controller {
  constructor (private readonly userUpdater: UserEmailVerificator) {}

  async handle (query: any, body: any): Promise<HttpResponse<string>> {
    try {
      const { token } = query

      await this.userUpdater.verify(token, process.env.EMAIL_SECRET!)

      return ok('Verificação realizada com sucesso')
    } catch (error: any) {
      return serverError(error)
    }
  }
}
