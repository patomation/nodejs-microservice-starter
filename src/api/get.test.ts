import test from 'ava'
import supertest from 'supertest'
import get from './get.js'

test('get/read', async (t) => {
  const ID = '1234'
  await new Promise<void>((resolve) => {
    supertest(get)
      .get(`/${ID}`)
      .send()
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
