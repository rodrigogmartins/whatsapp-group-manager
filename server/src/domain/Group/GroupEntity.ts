export class Group {
  createdAt!: Date
  updatedAt!: Date

  constructor(
    readonly id: string,
    readonly name: string,
    readonly creatorId: string,
    readonly urlSlug: string
  ) {}

  setCreatedAt(createdAt: Date): Group {
    this.createdAt = createdAt

    return this
  }

  setUpdatedAt(updatedAt: Date): Group {
    this.updatedAt = updatedAt

    return this
  }
}
