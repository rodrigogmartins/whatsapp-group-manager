import { UserCreator } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { UserViewModel } from '@/view/view-models'

export class UserController implements Controller {
  constructor (private readonly userCreator: UserCreator) {}

  async handle (): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userCreator.create({
        id: '1',
        name: 'r',
        email: 'email',
        password: 'email'
      })

      return created(user)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
