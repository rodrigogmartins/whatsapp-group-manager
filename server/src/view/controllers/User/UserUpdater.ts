import { UserUpdater, UserUpdaterCommand } from '@/domain/User/UserUpdater'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { UserViewModel } from '@/view/controllers/User'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('UserUpdaterController.js')

export class UserUpdaterController implements Controller {
  constructor(private readonly userUpdater: UserUpdater) {}

  async handle(
    query: undefined,
    body: UserUpdaterCommand
  ): Promise<HttpResponse<UserViewModel>> {
    try {
      log.info('Calling user update', { user: body })
      const user = await this.userUpdater.update(body)
      log.info('User updated', { user: user })

      return ok(user)
    } catch (error: any) {
      log.error('Error trying to update user', { user: body, error })
      return serverError(error)
    }
  }
}
