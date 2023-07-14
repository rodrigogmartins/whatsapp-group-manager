import { UserInput } from '@/data/interfaces'
import { UserCreator } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { UserViewModel } from '@/view/view-models'

export class UserCreatorController implements Controller {
  constructor(private readonly userCreator: UserCreator) {}

  async handle(
    query: undefined,
    body: UserInput
  ): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userCreator.create(body)

      return created(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
