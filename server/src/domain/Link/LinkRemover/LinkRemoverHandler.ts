import { LinkRepository } from '@/domain/Link'
import { LinkRemover } from '@/domain/Link/LinkRemover'

export class LinkRemoverHandler implements LinkRemover {
  constructor(private readonly linkRepository: LinkRepository) {}

  async remove(linkId: string): Promise<void> {
    this.linkRepository.delete(linkId)
  }
}
