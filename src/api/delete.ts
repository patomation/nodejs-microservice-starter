import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
export const postJsonDataExample = app.delete(
  '/:id',
  (req: Request, res: Response) => {
    res.send(true)
  }
)
export default postJsonDataExample
