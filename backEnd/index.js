import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dB.js';
import authRoutes from './routes/authRoute.js';
import ProdRoutes from './routes/productRoute.js'
import cors from 'cors'
import 'colors'

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json())

app.use('/api/auth', authRoutes);
app.use('/api/product', ProdRoutes)



app.get('/', (req, res) => {
    res.send('<h1> welcome </h1>');
})


app.listen(process.env.PORT, () => {
    console.log(`Server Start on Port ${process.env.PORT}`.bgGreen)
})