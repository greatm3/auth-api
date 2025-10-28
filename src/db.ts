import { Pool } from "pg"
import { type PoolConfig } from "pg"
import dotenv from "dotenv"
import path from "path"

dotenv.config({
    path: path.resolve(__dirname, '../.env')
}) 

const dbConfig: PoolConfig = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
}

const appPool = new Pool(dbConfig) 

export default appPool