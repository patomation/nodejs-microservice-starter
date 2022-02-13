import test from 'ava'
import supertest from 'supertest'
import post from './post.js'

test('post/create', async (t) => {
  const ID = '1234'
  const testData = {
    test: 'foobar',
    array: [{ title: 'foo' }, { title: 'baz' }],
  }
  await new Promise<void>((resolve) => {
    supertest(post)
      .post(`/${ID}`)
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
