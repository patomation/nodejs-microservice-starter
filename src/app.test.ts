'use strict'
import test from 'ava'
import { build } from './app'

test('health', async (t) => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: '/health',
  })
  t.is(response.statusCode, 200)
  t.is(JSON.parse(response.body)?.status, 'ok')
  t.is(JSON.parse(response.body)?.statusCode, 200)
  t.not(JSON.parse(response.body)?.uptime, undefined)
})
