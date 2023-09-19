import { GroupCreator, GroupCreatorCommand } from '@/domain/Group/GroupCreator'
import {
  Controller,
  HttpResponse,
  created,
  serverError
} from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('LinkLoaderController.js')

export class GroupCreatorController implements Controller {
  constructor(private readonly groupCreator: GroupCreator) {}

  async handle(
    query: any,
    body: GroupCreatorCommand
  ): Promise<HttpResponse<GroupViewModel>> {
    try {
      log.info('Calling create group', { group: body })
      const group = await this.groupCreator.create(body)
      const viewGroup = GroupViewModel.map(group)
      log.info('Group created', { group: viewGroup })

      return created(viewGroup)
    } catch (error: any) {
      log.error('Error trying to create group', { groupId: query.id, error })
      return serverError(error)
    }
  }
}
