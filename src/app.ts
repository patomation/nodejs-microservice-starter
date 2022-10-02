'use strict'
import Fastify, { FastifyServerOptions, FastifyInstance } from 'fastify'
import { routes } from './routes'
import fastifyHealthcheck from 'fastify-healthcheck'

async function build(
  options: FastifyServerOptions = {}
): Promise<FastifyInstance> {
  const fastify = Fastify(options)
  fastify.register(fastifyHealthcheck, {
    exposeUptime: true,
  })
  routes.forEach((route) => fastify.route(route))
  return fastify
}

export { build }
