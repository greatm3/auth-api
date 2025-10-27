import express from 'express';
import dotenv from 'dotenv'; 
import cors from "cors"
import { authRouter } from './routes/auth.route';
import { errorHandler } from './middlewares/error_handler.middleware'

dotenv.config({
    path: '.env',
});

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRouter)

app.use(errorHandler)

app.listen(process.env.APP_PORT, () => {
    console.log('app started @', process.env.APP_PORT);
});
