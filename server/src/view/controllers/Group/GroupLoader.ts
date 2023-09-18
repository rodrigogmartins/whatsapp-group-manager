import { GroupLoader } from '@/domain/Group/GroupLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('GroupLoaderController.js')

export class GroupLoaderController implements Controller {
  constructor(private readonly groupLoader: GroupLoader) {}

  async handle(query: any, body: any): Promise<HttpResponse<GroupViewModel>> {
    try {
      log.info('Calling load group', { groupId: query.id })
      const group = await this.groupLoader.load(query.id)
      const viewGroup = GroupViewModel.map(group)
      log.info('Group loadded', { group: viewGroup })

      return ok(viewGroup)
    } catch (error: any) {
      log.error('Error trying to load group', { groupId: query.id, error })
      return serverError(error)
    }
  }
}
