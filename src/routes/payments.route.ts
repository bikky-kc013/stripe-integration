import express from 'express';
const paymentRouter = express();
import { payments } from '../controllers/payments.controllers';

paymentRouter.post('/api/v1/payments/:id', payments);
export { paymentRouter };
