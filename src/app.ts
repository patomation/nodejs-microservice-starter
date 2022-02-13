import express from 'express'
import cors from "cors"
import { postJsonDataExample } from './api/postJsonDataExample'
const app = express()
const port = process.env.PORT || 8080

app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {
  res.status(200).send({jason: 'foobar3'})
})

app.use(postJsonDataExample)

export { app, port }
