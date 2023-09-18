import { GroupRemover } from '@/domain/Group/GroupRemover'
import { LoggerAdapter } from '@/infra/adapters/Logger'
import {
  Controller,
  HttpResponse,
  serverError,
  noContent
} from '@/view/interfaces'

const log = LoggerAdapter.createLogFor('GroupRemoverController.js')

export class GroupRemoverController implements Controller {
  constructor(private readonly groupRemover: GroupRemover) {}

  async handle(query: any, body: any): Promise<HttpResponse<void>> {
    try {
      log.info('Calling remove group', { groupId: query.id })
      await this.groupRemover.remove(query.id)
      log.info('Group removed', { groupId: query.id })

      return noContent()
    } catch (error: any) {
      log.error('Error trying to remove group', { groupId: query.id, error })
      return serverError(error)
    }
  }
}
