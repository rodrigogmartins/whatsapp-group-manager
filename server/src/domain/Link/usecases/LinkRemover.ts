export interface LinkRemover {
  remove: (linkId: string) => Promise<void>
}
