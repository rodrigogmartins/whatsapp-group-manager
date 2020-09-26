import cors from 'cors'

const CorsMiddleware = cors({
  origin: 'http://127.0.0.1'
})

export { CorsMiddleware }
