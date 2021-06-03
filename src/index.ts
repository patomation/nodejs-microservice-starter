import express from 'express'
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('foobar')
})

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})
