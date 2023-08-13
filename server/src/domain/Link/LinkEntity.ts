export class Link {
  createdAt!: Date
  updatedAt!: Date

  constructor(
    readonly id: string,
    readonly url: string,
    readonly clicks: number,
    readonly clicksLimit: number,
    readonly platform: string,
    readonly groupId: string
  ) {}

  setCreatedAt(createdAt: Date): Link {
    this.createdAt = createdAt

    return this
  }

  setUpdatedAt(updatedAt: Date): Link {
    this.updatedAt = updatedAt

    return this
  }
}
