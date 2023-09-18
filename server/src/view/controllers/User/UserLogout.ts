import { UserLogout } from '@/domain/User/UserLogout'
import { LoggerAdapter } from '@/infra/adapters/Logger'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'

const log = LoggerAdapter.createLogFor('UserLogoutController.js')

// TODO: Identify the user that was trying to logout before
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
