export interface GroupRemover {
  remove: (groupId: string) => Promise<void>
}
