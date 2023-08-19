import { UserLogin } from '@/domain/User/UserLogin'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'

export class UserLoginInController implements Controller {
  constructor(private readonly userLogin: UserLogin) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      const { email, password } = body

      const cookie = await this.userLogin.login(email, password)

      return ok(cookie)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
