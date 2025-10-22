import express from "express";
import dotenv from "dotenv"
import database from "./db.ts"

dotenv.config({
    path: '.env',
});

const app = express();
app.use(express.json())

const client = await database.connect()

const response = await client.query("SELECT NOW()")

console.log(response.rows[0].now)

app.listen(process.env.APP_PORT, () => {
    console.log('app started @', process.env.APP_PORT);
});
