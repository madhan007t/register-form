 const express=require('express')
 const app=express();
 const mongoose=require('mongoose')
 const cors=require('cors')
 const bodyparser=require('body-parser')
 const userRoutes = require('./routes/form'); 





 mongoose.connect('mongodb+srv://madhanraj:madhan007@cluster0.jpze5xz.mongodb.net/Form-details?retryWrites=true&w=majority&appName=Cluster0')
 .then(()=>{
     console.log('Database is connected ')
 }).catch(err=>{
     console.log('Database connection error ',err);
 });


 app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);




 app.listen(5000 ,()=>{
     console.log('server.js is connected ')

 })