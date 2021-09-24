import { LinkRemover } from '@/domain/usecases'
import { LinkRepository } from '@/data/interfaces'

export class LinkRemoverService implements LinkRemover {
  constructor (private readonly linkRepository: LinkRepository) {}

  async remove (linkId: string): Promise<void> {
    this.linkRepository.delete(linkId)
  }
}
