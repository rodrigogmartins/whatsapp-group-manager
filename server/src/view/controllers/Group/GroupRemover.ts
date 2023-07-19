import { GroupRemover } from '@/domain/Group/usecases'
import {
  Controller,
  HttpResponse,
  serverError,
  noContent
} from '@/view/interfaces'

export class GroupRemoverController implements Controller {
  constructor(private readonly groupRemover: GroupRemover) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      await this.groupRemover.remove(query.id)

      return noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
