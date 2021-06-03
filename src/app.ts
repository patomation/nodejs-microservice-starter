import express from 'express'
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.status(200).send('foobar')
})

export { app, port }
