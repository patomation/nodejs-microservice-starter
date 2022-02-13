import cors from 'cors'
import express from 'express'
import path from 'path'
import fs from 'fs'

const API = 'api'

const app = express()
const port = process.env.PORT || 80

app.use(
  cors({
    origin: '*',
  })
)

/***
 * Load up all the api files
 */
async function main() {
  const targetDirectory = path.join(__dirname, API)
  const fileNames = await fs.promises.readdir(targetDirectory)
  await Promise.all(
    fileNames.map(async (fileName) => {
      // Ignore test files and don't try to import them - todo might not need to go into production
      if (!fileName.includes('test')) {
        const filePath = `./${API}/${fileName}`
        console.log(`importing ${filePath} as /${fileName.split('.')[0]}`)
        const route = await import(filePath)
        // assuming all routes files are exported as default with express get post patch ect
        app.use(route?.default)
      }
    })
  )
  app.listen(port, () => {
    console.log('Server started on port: ' + port)
  })
}
main()
