import { GroupLoader } from '@/domain/Group/GroupLoader'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { GroupViewModel } from '@/view/controllers/Group'

export class GroupLoaderController implements Controller {
  constructor(private readonly groupLoader: GroupLoader) {}

  async handle(query: any, body: any): Promise<HttpResponse<GroupViewModel>> {
    try {
      const group = await this.groupLoader.load(query.id)
      const viewGroup = GroupViewModel.map(group)

      return ok(viewGroup)
    } catch (error: any) {
      return serverError(error)
    }
  }
}
