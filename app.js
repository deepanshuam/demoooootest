import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';
import companyRoutes from './routes/demo.Routes.js';

const app = express();


app.use(json());
app.use(cors());


app.use('/api', companyRoutes);

export default app;
