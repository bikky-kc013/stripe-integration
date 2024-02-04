//!This is how I integrate a stripe api in the node.ts based backend 
import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json());
import morgan from 'morgan';
app.use(morgan('dev'));
import { notFound, errorHandler } from './middlewares/errorHandler';
import { paymentRouter } from './routes/payments.route';

app.use(paymentRouter);
app.use(notFound);
app.use(errorHandler);

const PORT: number = parseInt(process.env.PORT || '3000');


app.listen(PORT, "127.0.0.1", (): void => {
    console.log(`Listening to the port ${PORT}`);
});
