import { GroupsCollectionLoader } from '@/domain/Group/GroupsCollectionLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'
import { LoggerAdapter } from '@/infra/adapters/Logger'

const log = LoggerAdapter.createLogFor('GroupsCollectionLoaderController.js')

// TODO: add pagination
export class GroupsCollectionLoaderController implements Controller {
  constructor(
    private readonly groupsCollectionLoader: GroupsCollectionLoader
  ) {}

  async handle(query: any, body: any): Promise<HttpResponse<GroupViewModel[]>> {
    try {
      log.info('Calling groups collection load')
      const groups = await this.groupsCollectionLoader.load()
      const viewGroups = GroupViewModel.mapCollection(groups)
      log.info('Groups collection loaded')

      return ok(viewGroups)
    } catch (error: any) {
      log.error('Error trying to load groups collection', { error })
      return serverError(error)
    }
  }
}
