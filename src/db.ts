import { Pool } from "pg"
import { type PoolConfig } from "pg"
import dotenv from "dotenv"
import path from "path"

dotenv.config({
    path: path.resolve(__dirname, '../.env')
}) 

const dbConfig: PoolConfig = {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT) || 5432,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
}

const appPool = new Pool(dbConfig) 

export default appPool