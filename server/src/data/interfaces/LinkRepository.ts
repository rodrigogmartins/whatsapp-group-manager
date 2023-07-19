export type LinkInput = {
  id: string
  url: string
  clicks: number
  clicksLimit: number
  platform: string
  groupId: string
}

export type LinkUpdateInput = {
  id: string
  url?: string
  clicks?: number
  clicksLimit?: number
  platform?: string
  groupId?: string
}

export type LinkInputPostgres = {
  id: string
  url: string
  platform: string
  clicks: number
  clicks_limit: number
  group_id: string
}

export type LinkUpdateInputPostgres = {
  id: string
  url?: string
  platform?: string
  clicks?: number
  clicks_limit?: number
  group_id?: string
}
