import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello!' })
})

app.listen(process.env.PORT)

export { app }
