import { GroupUpdater, GroupUpdaterCommand } from '@/domain/Group/GroupUpdater'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'

export class GroupUpdaterController implements Controller {
  constructor(private readonly groupUpdater: GroupUpdater) {}

  async handle(
    query: any,
    body: GroupUpdaterCommand
  ): Promise<HttpResponse<GroupViewModel>> {
    try {
      const group = await this.groupUpdater.update(body)
      const viewGroup = GroupViewModel.map(group)

      return ok(viewGroup)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
