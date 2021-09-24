import { Link } from '@/domain/entities'
import { LinkUpdater } from '@/domain/usecases'
import { LinkInput, LinkRepository } from '@/data/interfaces'

export class LinkUpdaterService implements LinkUpdater {
  constructor (private readonly linkRepository: LinkRepository) {}

  async update (link: LinkInput): Promise<Link> {
    return this.linkRepository.update(link)
  }
}
