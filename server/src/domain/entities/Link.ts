export type Link = {
  link: string
  clicks: number
  platform: string
  group: LinkGroup
  createdAt: Date
  updatedAt: Date
}

type LinkGroup = {
  id: string
  name: string
}
