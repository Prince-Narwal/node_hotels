const mongoose=require('mongoose'); 

//Define the  mongodb connection url
const mongourl='mongodb://127.0.0.1:27017/hotels'

//Set up mongodb connection
mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintains a default object representing the mongodb connection
const db=mongoose.connection;

//define event listners for database connection
//connected,error,disconnected::---> all are event listner keywords
db.on('connected',()=>{
    console.log('connected to Mongodb server');//when connected to mongodb will print this message
})

db.on('error',()=>{
    console.log('Mongodb connection error');
})

db.on('disconnected',()=>{
    console.log("mongodb disconnected");
})