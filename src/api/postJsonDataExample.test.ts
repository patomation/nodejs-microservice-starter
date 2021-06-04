import test from 'ava'
import supertest from 'supertest'
import { postJsonDataExample } from './postJsonDataExample'
test('app get', async (t) => {
  const testData = {
    test: 'foobar',
    array: [{ title: 'foo' }, { title: 'baz' }],
  }

  await new Promise<void>((resolve) => {
    supertest(postJsonDataExample)
      .post('/postJsonDataExample')
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
