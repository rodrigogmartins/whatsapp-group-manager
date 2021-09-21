import { UserLoader } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { UserViewModel } from '@/view/view-models'

export class UserLoaderController implements Controller {
  constructor (private readonly userLoader: UserLoader) {}

  async handle (query: any, body: any): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userLoader.load(query.id)

      return created(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
