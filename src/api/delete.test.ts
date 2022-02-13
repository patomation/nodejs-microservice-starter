import test from 'ava'
import supertest from 'supertest'
import deleteModule from './delete.js'

test('delete', async (t) => {
  const ID = '1234'
  await new Promise<void>((resolve) => {
    supertest(deleteModule)
      .delete(`/${ID}`)
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
