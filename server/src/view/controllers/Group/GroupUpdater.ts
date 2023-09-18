import { GroupUpdater, GroupUpdaterCommand } from '@/domain/Group/GroupUpdater'
import { Controller, HttpResponse, ok, serverError } from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('GroupUpdaterController.js')

export class GroupUpdaterController implements Controller {
  constructor(private readonly groupUpdater: GroupUpdater) {}

  async handle(
    query: any,
    body: GroupUpdaterCommand
  ): Promise<HttpResponse<GroupViewModel>> {
    try {
      log.info('Calling update group', { group: body })
      const group = await this.groupUpdater.update(body)
      const viewGroup = GroupViewModel.map(group)
      log.info('Group updated', { group: viewGroup })

      return ok(viewGroup)
    } catch (error: any) {
      log.error('Error trying to update group', { group: body, error })
      return serverError(error)
    }
  }
}
