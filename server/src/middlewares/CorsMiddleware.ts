import cors from 'cors'

const CorsMiddleware = cors({
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: [
    'X-Requested-With',
    'X-HTTP-Method-Override',
    'Content-Type',
    'Accept'
  ]
})

export { CorsMiddleware }
