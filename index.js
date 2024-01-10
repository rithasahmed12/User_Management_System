require('dotenv').config();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user_management_system");
const nocache = require('nocache');
const path = require('path');


const express = require("express");
const app = express();

app.use(nocache());
app.use(express.static(path.join(__dirname,'public','styles')));

const PORT = process.env.PORT || 3000;


//for user routes 
const userRoute= require('./routes/userRoutes');
app.use('/',userRoute);

//for admin routes 
const adminRoute= require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.set('view engine', 'ejs');

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}/home`); 
    console.log(`server is running on http://localhost:${PORT}/admin`); 
});

