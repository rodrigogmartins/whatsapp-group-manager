import { SessionLogIn } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'

export class SessionLogInController implements Controller {
  constructor (private readonly sessionLogIn: SessionLogIn) {}

  async handle (query: any, body: any): Promise<HttpResponse<void>> {
    try {
      const { email, password } = body

      const cookie = await this.sessionLogIn.logIn(email, password)

      return ok(cookie)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
