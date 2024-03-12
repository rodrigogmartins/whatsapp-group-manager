import { UserLogin } from '@/domain/User/UserLogin'
import { LoggerAdapter } from '@/infra/adapters/Logger'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'

const log = LoggerAdapter.createLogFor('UserLoginController.js')

export class UserLoginInController implements Controller {
  constructor(private readonly userLogin: UserLogin) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      log.info('Calling user login', { userEmail: body.email })
      const { email, password } = body
      const cookie = await this.userLogin.login(email, password)
      log.info('User logged in', { userEmail: body.email })

      return ok(cookie)
    } catch (error: any) {
      log.error('Error trying to login user', { userEmail: body.email, error })
      return serverError(error)
    }
  }
}
