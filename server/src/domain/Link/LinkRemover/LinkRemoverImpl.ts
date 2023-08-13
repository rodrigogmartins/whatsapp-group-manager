import { LinkRepository } from '@/domain/Link'
import { LinkRemover } from '@/domain/Link/LinkRemover'

export class LinkRemoverService implements LinkRemover {
  constructor(private readonly linkRepository: LinkRepository) {}

  async remove(linkId: string): Promise<void> {
    this.linkRepository.delete(linkId)
  }
}
