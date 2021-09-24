import { Link } from '@/domain/entities'

export interface LinksCollectionLoader {
  load: () => Promise<Link[]>
}
