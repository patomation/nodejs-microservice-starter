import test from 'ava'
import supertest from 'supertest'
import patch from './patch.js'

test('patch/update', async (t) => {
  const ID = '1234'
  const testData = {
    test: 'foobar',
    array: [{ title: 'foo' }, { title: 'baz' }],
  }
  await new Promise<void>((resolve) => {
    supertest(patch)
      .patch(`/${ID}`)
      .send(testData)
      .expect(200)
      .expect(testData)
      .end((err, res) => {
        // If error throw error
        if (err) throw err
        // Else pass test
        resolve()
      })
  })
  t.pass()
})
