import 'module-alias/register'
import { app } from '@/app/config/app'

app.listen(process.env.PORT, () =>
  console.log(`Server is running at: http://localhost:${process.env.PORT}`)
)
