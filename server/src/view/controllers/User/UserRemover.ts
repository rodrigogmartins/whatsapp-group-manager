import { UserRemover } from '@/domain/User/usecases'
import {
  Controller,
  HttpResponse,
  serverError,
  noContent
} from '@/view/interfaces'

export class UserRemoverController implements Controller {
  constructor(private readonly userRemover: UserRemover) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      await this.userRemover.remove(query.id)

      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
