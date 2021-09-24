import { GroupCreator } from '@/domain/usecases'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { GroupViewModel } from '@/view/view-models'

export class GroupCreatorController implements Controller {
  constructor (private readonly groupCreator: GroupCreator) {}

  async handle (query: any, body: any): Promise<HttpResponse<GroupViewModel>> {
    try {
      const group = await this.groupCreator.create(body)
      const viewGroup = GroupViewModel.map(group)

      return created(viewGroup)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
