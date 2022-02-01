import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/restaurant.js'
import foodRoutes from './routes/food.js';
import userRoutes from './routes/users.js';


const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use('/restaurants',restaurantRoutes);
app.use('/foods',foodRoutes);
app.use('/users',userRoutes);

/*
app.use('/users',userRoutes);
app.use('/rooms',roomRoutes);
app.use('/products',productRoutes);
app.use("/ongoingrooms", ongoingRoomRoute);*/

app.use(cors());


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))
}).catch((error)=>{
    console.log(error.message);
});

