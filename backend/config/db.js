import mongoose from "mongoose";

export const connectDB  = async ()=>{
    await mongoose.connect('mongodb+srv://musthaquemt7:Rayan786786@cluster0.8lylret.mongodb.net/food-del').then(()=>console.log("DB connected"));
}