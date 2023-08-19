import { UserLogout } from '@/domain/User/UserLogout'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'

export class UserLogoutController implements Controller {
  constructor(private readonly userLogout: UserLogout) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      const cookie = await this.userLogout.logout()

      return ok(cookie)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
