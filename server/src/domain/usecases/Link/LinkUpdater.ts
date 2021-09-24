import { LinkInput } from '@/data/interfaces'
import { Link } from '@/domain/entities'

export interface LinkUpdater {
  update: (link: LinkInput) => Promise<Link>
}
