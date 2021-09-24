import { SessionLogOut } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'

export class SessionLogOutController implements Controller {
  constructor (private readonly sessionLogOut: SessionLogOut) {}

  async handle (query: any, body: any): Promise<HttpResponse<void>> {
    try {
      const cookie = await this.sessionLogOut.logOut()

      return ok(cookie)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
