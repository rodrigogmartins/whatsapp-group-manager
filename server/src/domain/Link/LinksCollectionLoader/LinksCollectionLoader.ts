import { Link } from '@/domain/Link'

export interface LinksCollectionLoader {
  load: () => Promise<Link[]>
}
