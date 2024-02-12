import mongoose from "mongoose";
//just connecting with database
export const dbConnection =()=>{
  mongoose.connect(process.env.MONGO_URI,{
    dbName: "RESTAURANT"
  }).then(()=>{
    console.log("Connected to database successfully!");
  }).catch((err)=>{
    console.log(`some error occured while connecting to database! ${err}`);
  });  
};