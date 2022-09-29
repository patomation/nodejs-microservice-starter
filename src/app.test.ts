'use strict'
import test from 'ava'
import { build } from './app'

test('app get', async (t) => {
  const app = build()
  const response = await app.inject({
    method: 'GET',
    url: '/',
  })
  t.is(response.statusCode, 200)
  t.deepEqual(JSON.parse(response.body), { hello: 'world' })
})
