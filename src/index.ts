import { app, port } from './app'

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})
