import express, { Request, Response, NextFunction, Express } from 'express'
import morgan from 'morgan'

const app: Express = express()

app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Magic-DOT')
})

export default app
