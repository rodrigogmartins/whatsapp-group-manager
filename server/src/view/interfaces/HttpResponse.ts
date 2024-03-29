export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data: data
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  data: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: ''
})

export const redirect = (urlToRedirect: string): HttpResponse => ({
  statusCode: 301,
  data: urlToRedirect
})
