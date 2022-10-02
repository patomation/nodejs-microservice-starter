'use strict'
import { build } from './app'
import * as dotenv from 'dotenv'

dotenv.config()

const port = Number(process.env.PORT) || 80
const host = process.env.HOST || '0.0.0.0'

async function main() {
  const server = await build({
    logger: {
      level: 'info',
    },
  })

  server.listen({ port, host }, (err, address) => {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
    console.log(`Server is now listening on ${address}`)
  })
}
main()
