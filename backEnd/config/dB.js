import mongoose from 'mongoose'
import 'colors'
// import { bgRed } from 'colors'

async function connectDB () {
    try{
        const connection = await mongoose.connect(`${process.env.DATABASE}`)
        console.log(`MongoDB connected at ${process.env.DATABASE}`.bgGreen.white)
    } catch {
        console.log(`Error : DataBase Not Connected`.bgRed.white)
    }
} 
export default connectDB;