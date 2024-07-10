import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// app config
const app = express();
const port = process.env.PORT || 4000;


// midlewares
app.use(express.json()); // requests are pased through this method
app.use(cors());        // allow front end to connect with the backend


// initializing routes
app.get('/', (req,res)=>(res.send("API is working")))

app.listen(port,()=>console.log(`Server is running on ${port}`))