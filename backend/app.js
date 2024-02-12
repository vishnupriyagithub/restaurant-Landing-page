import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
//*
import mongoose from "mongoose";


const app = express();
dotenv.config({path:'./config/config.env'});
//to connect backend with frontend we use cors
app.use(
  cors({
    //*
  //origin: [process.env.FRONTEND_URL],
  origin:["https://deploy-mern-1whq.vercel.app"],
  methods: ["POST"],
  credentials: true,
  })
);
//to use it ass middleware
//app.use is used to use it as middleware
app.use(express.json());//converts string to obj
app.use(express.urlencoded({extended:true}));//type of data
app.use('/api/v1/reservation', reservationRouter);
//*
mongoose.connect('mongodb+srv://vishnupriya:xEDpnSHDoscVcTLu@cluster0.lcqhykc.mongodb.net/RESTAURANT?retryWrites=true&w=majority';
//*
//dbConnection();

app.use(errorMiddleware);
export default app;
