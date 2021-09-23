export interface UserRemover {
  remove: (userId: string) => Promise<void>
}
