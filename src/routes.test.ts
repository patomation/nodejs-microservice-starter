'use strict'
import test from 'ava'
import { build } from './app'

test('hello world', async (t) => {
  const app = await build()
  const response = await app.inject({
    method: 'GET',
    url: '/hello',
  })
  t.is(response.statusCode, 200)
  t.deepEqual(JSON.parse(response.body), { hello: 'world' })
})
