'use strict'
import Fastify, { FastifyServerOptions, FastifyInstance } from 'fastify'

function build(options: FastifyServerOptions = {}): FastifyInstance {
  const app = Fastify(options)
  app.get('/', async (request, reply) => {
    reply.type('application/json').code(200)
    return { hello: 'world' }
  })
  return app
}

export { build }
