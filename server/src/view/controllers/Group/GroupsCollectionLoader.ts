import { GroupsCollectionLoader } from '@/domain/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { GroupViewModel } from '@/view/view-models'

export class GroupsCollectionLoaderController implements Controller {
  constructor (private readonly groupsCollectionLoader: GroupsCollectionLoader) {}

  async handle (query: any, body: any): Promise<HttpResponse<GroupViewModel[]>> {
    try {
      const groups = await this.groupsCollectionLoader.load()
      const viewGroups = GroupViewModel.mapCollection(groups)

      return ok(viewGroups)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
