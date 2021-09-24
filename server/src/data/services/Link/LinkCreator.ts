import { Link } from '@/domain/entities'
import { LinkCreator } from '@/domain/usecases'
import { LinkInput, LinkRepository } from '@/data/interfaces'

export class LinkCreatorService implements LinkCreator {
  constructor (private readonly linkRepository: LinkRepository) {}

  async create (link: LinkInput): Promise<Link> {
    // Validações

    return this.linkRepository.create(link)
  }
}
