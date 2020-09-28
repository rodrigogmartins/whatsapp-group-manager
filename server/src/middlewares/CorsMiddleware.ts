import cors from 'cors'

const CorsMiddleware = cors({
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
})

export { CorsMiddleware }
