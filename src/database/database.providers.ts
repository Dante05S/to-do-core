import { PROVIDE } from 'src/constants'
import { DataSource } from 'typeorm'

export const databaseProviders = [
  {
    provide: PROVIDE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false
      })

      return dataSource.initialize()
    }
  }
]
