import { UserCreator, UserCreatorCommand } from '@/domain/User/UserCreator'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { UserViewModel } from '@/view/controllers/User'

export class UserCreatorController implements Controller {
  constructor(private readonly userCreator: UserCreator) {}

  async handle(
    query: undefined,
    body: UserCreatorCommand
  ): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userCreator.create(body)

      return created(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
