import express, { type Request, type Response } from 'express';
import cors from "cors"
import { authRouter } from './routes/auth.route';
import dotenv from 'dotenv'; 

dotenv.config({
    path: '.env',
});

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRouter)

app.listen(process.env.APP_PORT, () => {
    console.log('app started @', process.env.APP_PORT);
});
