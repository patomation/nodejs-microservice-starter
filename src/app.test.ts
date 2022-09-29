'use strict'
import test from 'ava'
import { build } from './app'

// const test = async () => {
//   const app = build()
//   const response = await app.inject({
//     method: 'GET',
//     url: '/'
//   })

//   console.log('status code: ', response.statusCode)
//   console.log('body: ', response.body)
// }

// test()

test('app get', async (t) => {
  const app = build()
  const response = await app.inject({
    method: 'GET',
    url: '/',
  })
  t.is(response.statusCode, 200)
  t.deepEqual(JSON.parse(response.body), { hello: 'world' })
})
