import { RouteOptions } from 'fastify'

export const routes: RouteOptions[] = [
  {
    method: 'GET',
    url: '/hello',
    handler: (request, reply) => {
      reply.type('application/json').code(200)
      return { hello: 'world' }
    },
  },
]
