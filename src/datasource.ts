import path from 'path'
import { DataSource } from 'typeorm'
import {} from './entities'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.resolve(__dirname, '../data/database.sq3'),
  entities: [],
  synchronize: true,
  logging: false,
})
