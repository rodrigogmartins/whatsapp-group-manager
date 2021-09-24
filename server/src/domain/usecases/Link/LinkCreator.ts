import { LinkInput } from '@/data/interfaces'
import { Link } from '@/domain/entities'

export interface LinkCreator {
  create: (link: LinkInput) => Promise<Link>
}
