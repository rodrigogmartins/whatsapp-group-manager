export type GroupInput = {
  id: string
  name: string
  urlSlug: string
  creatorId: string
}

export type GroupUpdateInput = {
  id: string
  name?: string
  urlSlug?: string
  creatorId?: string
}

export type GroupInputPostgres = {
  id: string
  name: string
  url_slug: string
  creator_id: string
}

export type GroupUpdateInputPostgres = {
  id: string
  name?: string
  url_slug?: string
  creator_id?: string
}
