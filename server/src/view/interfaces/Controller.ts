import { HttpResponse } from '.'

export interface Controller {
  handle: (query: any, body: any) => Promise<HttpResponse>
}
