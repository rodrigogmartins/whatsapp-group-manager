import { GroupCreator, GroupCreatorCommand } from '@/domain/Group/GroupCreator'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'

export class GroupCreatorController implements Controller {
  constructor(private readonly groupCreator: GroupCreator) {}

  async handle(
    query: any,
    body: GroupCreatorCommand
  ): Promise<HttpResponse<GroupViewModel>> {
    try {
      const group = await this.groupCreator.create(body)
      const viewGroup = GroupViewModel.map(group)

      return created(viewGroup)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
