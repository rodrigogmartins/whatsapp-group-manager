import { Link } from '@/domain/Link'
import { LinkUpdateCommand } from '@/domain/Link/LinkUpdater'

export interface LinkUpdater {
  update: (link: LinkUpdateCommand) => Promise<Link>
}
