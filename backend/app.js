import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';



const app = express();
dotenv.config({path:'./config/config.env'});
//to connect backend with frontend we use cors
app.use(
  cors({
    
  origin: [process.env.FRONTEND_URL],
 
  methods: ["POST"],
  credentials: true,
  })
);
//to use it ass middleware
//app.use is used to use it as middleware
app.use(express.json());//converts string to obj
app.use(express.urlencoded({extended:true}));//type of data
app.use('/api/v1/reservation', reservationRouter);

dbConnection();

app.use(errorMiddleware);
export default app;
