const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const productRoute = require('./api/routes/product')
const userRoute = require('./api/routes/signup')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//mongodb connection
mongoose.connect('mongodb+srv://root:root@loginsignupapi.dwq4dpe.mongodb.net/')


mongoose.connection.on('error', err =>{
    console.log('connection failed');
})


mongoose.connection.on('connected', () =>{
    console.log('connected sucessfully');
})

app.use(cors());



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/product', productRoute);
app.use('/user', userRoute);

app.use((req,res,next) =>{
    res.status(404).json({
        message:'url not found'
    })
})

module.exports = app;

