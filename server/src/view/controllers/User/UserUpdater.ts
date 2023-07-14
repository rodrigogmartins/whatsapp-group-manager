import { UserUpdateInput } from '@/data/interfaces'
import { UserUpdater } from '@/domain/usecases'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { UserViewModel } from '@/view/view-models'

export class UserUpdaterController implements Controller {
  constructor(private readonly userUpdater: UserUpdater) {}

  async handle(
    query: undefined,
    body: UserUpdateInput
  ): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userUpdater.update(body)

      return ok(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
