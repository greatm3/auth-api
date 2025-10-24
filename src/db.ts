import { Pool } from "pg"
import { type PoolConfig } from "pg"
import dotenv from "dotenv"

dotenv.config()

const dbConfig: PoolConfig = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
}

const appPool = new Pool(dbConfig)

export default appPool