import express from 'express'
import { postJsonDataExample } from './api/postJsonDataExample'
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.status(200).send('foobar')
})

app.use(postJsonDataExample)

export { app, port }
