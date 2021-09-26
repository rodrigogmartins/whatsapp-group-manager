import { LinkUpdateInput } from '@/data/interfaces'
import { Link } from '@/domain/entities'

export interface LinkUpdater {
  update: (link: LinkUpdateInput) => Promise<Link>
}
