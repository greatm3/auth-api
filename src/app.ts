import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv'; 

dotenv.config({
    path: '.env',
});

const app = express();
app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log('app started @', process.env.APP_PORT);
});
