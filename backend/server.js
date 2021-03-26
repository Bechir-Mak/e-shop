import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv'



dotenv.config();


const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//connect mongoose 
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/e-shop', {

              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex:true,
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);


app.get ('/', (req , res) => {

              res.send('Server is ready');
              
});

app.use( (res, err ,req, next) => {
              req.status(500).send ({message:err.message});

});

const port = process.env.PORT || 3001;
app.listen(port, () => {

              console.log(`Serve at http://localhost:${port}`);
});