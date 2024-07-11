import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// midlewares
app.use(express.json()); // requests are pased through this method
app.use(cors());        // allow front end to connect with the backend


// initializing routes
app.use("/api/song", songRouter);


app.get('/', (req,res)=>(res.send("API is working")))

app.listen(port,()=>console.log(`Server is running on ${port}`))