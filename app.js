const express = require("express");
const app = express();
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://root:root@loginsignupapi.dwq4dpe.mongodb.net/')

mongoose.connection.on('error', err =>{
    console.log('connection failed');
});


mongoose.connection.on('connected', connected =>{
    console.log('connection sucessfully');
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student', studentRoute)
app.use('/faculty', facultyRoute)

app.use((req,res,next) =>{
    res.status(404).json({
        message:'url not found'
    })
})

module.exports = app;

