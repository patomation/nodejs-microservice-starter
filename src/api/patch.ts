import express, { Request, Response } from 'express'
/**
 * UPDATE
 */
const app = express()
app.use(express.json())
export const postJsonDataExample = app.patch(
  '/:id',
  (req: Request, res: Response) => {
    console.log('req.body', req.body)
    res.send(req.body)
  }
)
export default postJsonDataExample
