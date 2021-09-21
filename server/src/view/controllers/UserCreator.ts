import { CreateUser } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { UserViewModel } from '@/view/view-models'

export class UserCreatorController implements Controller {
  constructor (private readonly userCreator: CreateUser) {}

  async handle (query: any, body: any): Promise<HttpResponse<UserViewModel>> {
    try {
      const user = await this.userCreator.create(body)

      return created(user)
    } catch (error) {
      return serverError(error)
    }
  }
}
