import { UserCreator, UserCreatorCommand } from '@/domain/User/UserCreator'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { UserViewModel } from '@/view/controllers/User'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('UserCreatorController.js')

export class UserCreatorController implements Controller {
  constructor(private readonly userCreator: UserCreator) {}

  async handle(
    query: undefined,
    body: UserCreatorCommand
  ): Promise<HttpResponse<UserViewModel>> {
    try {
      log.info('Calling create user route', { userEmail: body.email })
      const user = await this.userCreator.create(body)
      log.info('User created', {
        userId: user.id,
        userEmail: user.email.value
      })

      return created(user)
    } catch (error: any) {
      log.error('Error trying to create user', { error })
      return serverError(error)
    }
  }
}
