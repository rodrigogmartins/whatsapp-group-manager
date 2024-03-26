import { Link } from '@/domain/Link'

export interface LinkLoaderFromUrlSlug {
  load: (linkId: string) => Promise<Link>
}
