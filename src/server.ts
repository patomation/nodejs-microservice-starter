'use strict'
import { build } from './app'

const port = Number(process.env.PORT) || 3000

const server = build({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
    },
  },
})

server.listen({ port }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})
