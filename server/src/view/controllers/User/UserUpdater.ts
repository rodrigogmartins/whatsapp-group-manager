import { UserUpdater, UserUpdaterCommand } from '@/domain/User/UserUpdater'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { UserViewModel } from '@/view/controllers/User'

export class UserUpdaterController implements Controller {
  constructor(private readonly userUpdater: UserUpdater) {}

  async handle(
    query: undefined,
    body: UserUpdaterCommand
  ): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userUpdater.update(body)

      return ok(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
