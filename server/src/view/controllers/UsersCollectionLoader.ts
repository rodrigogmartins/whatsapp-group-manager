import { UsersCollectionLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { UserViewModel } from '@/view/view-models'

export class UsersCollectionLoaderController implements Controller {
  constructor (private readonly usersCollectionLoader: UsersCollectionLoader) {}

  async handle (query: any, body: any): Promise<HttpResponse<UserViewModel[]>> {
    try {
      const users = await this.usersCollectionLoader.load()

      return ok(users)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
