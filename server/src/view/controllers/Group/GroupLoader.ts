import { GroupLoader } from '@/domain/Group/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/view/interfaces'
import { GroupViewModel } from '@/view/view-models'

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
