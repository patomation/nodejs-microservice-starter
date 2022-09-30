'use strict'
import { build } from './app'

const port = Number(process.env.PORT) || 80

const server = build({
  logger: {
    level: 'info',
  },
})

server.listen({ port, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})
