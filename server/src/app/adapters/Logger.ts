import { LogLevel, createLogger } from 'bunyan'
import bunyanFormat from 'bunyan-format'

export type LoggerRequestMessage = {
  url: string
  method: string
  headers: string[] | string
  query: string[] | string
  params: string[] | string
}

export type LoggerMessage = {
  id: string
  text: string
  message: string
}

export class Logger {
  private static formatOutput = bunyanFormat(
    { outputMode: 'short', color: true },
    process.stdout
  )

  static createLogFor(fileName: string) {
    const config = {
      name: fileName,
      level: 'debug' as LogLevel,
      streams: [
        {
          stream: this.formatOutput
        }
      ],
      serializers: {
        req: this.reqSerializer,
        message: this.messageSerializer,
        error: this.errorSerializer
      }
    }
    return createLogger(config)
  }

  private static reqSerializer({
    method,
    url,
    headers,
    query,
    params
  }: LoggerRequestMessage) {
    return {
      method,
      url,
      headers,
      query,
      params
    }
  }

  private static messageSerializer({ id, text, message }: LoggerMessage) {
    return {
      id,
      text,
      message
    }
  }

  private static errorSerializer(error: any) {
    return {
      code: error?.code,
      origin: error?.origin,
      message: error?.message,
      request: {
        method: error?.config?.method,
        headers: error?.config?.headers,
        url: error?.config?.url
      },
      response: {
        status: error?.response?.status,
        data: error?.response?.data
      }
    }
  }
}
