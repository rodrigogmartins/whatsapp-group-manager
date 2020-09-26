import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from '@config/cors'
import { routes } from './routes'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(routes)
app.use(cors)

// notFound
app.use((req: Request, res: Response, next) => {
  const error: any = new Error('Not found')
  error.status = 404

  next(error)
})

// catch all
app.use((error: any, req: Request, res: Response) => {
  res.status(error.status || 500)
  res.json({ error: error.message })
})

app.listen(process.env.PORT, () => console.log('Server is running'))
