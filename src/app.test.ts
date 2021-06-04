import test from 'ava'
import supertest from 'supertest'
import { app } from './app'

test('app get', async (t) => {
  await new Promise<void>((resolve) => {
    supertest(app)
      .get('/')
      .expect('foobar')
      .expect(200)
      .end((err, res) => {
        // If error throw error
        if (err) throw err
        // Else pass test
        resolve()
      })
  })
  t.pass()
})
