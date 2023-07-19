import { LinkUpdateInput } from '@/data/interfaces'
import { Link } from '@/domain/Link'

export interface LinkUpdater {
  update: (link: LinkUpdateInput) => Promise<Link>
}
