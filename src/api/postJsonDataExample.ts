import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
export const postJsonDataExample = app.post(
  '/postJsonDataExample',
  (req: Request, res: Response) => {
    console.log('req.body', req.body)
    res.send(req.body)
  }
)
