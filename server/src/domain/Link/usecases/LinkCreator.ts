import { LinkInput } from '@/data/interfaces'
import { Link } from '@/domain/Link'

export interface LinkCreator {
  create: (link: LinkInput) => Promise<Link>
}
