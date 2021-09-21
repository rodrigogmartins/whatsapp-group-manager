import { HttpResponse } from '.'

export interface Controller {
  handle: (params: any, body: any) => Promise<HttpResponse>
}
