import { Link } from '@/domain/Link'
import { LinkCreatorCommand } from '@/domain/Link/LinkCreator'

export interface LinkCreator {
  create: (link: LinkCreatorCommand) => Promise<Link>
}
