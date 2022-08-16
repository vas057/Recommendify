/****
 * SETTING UP SERVER WITH EXPRESS
 ****/


const express = require('express');
const session = require('cookie-session');
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require ('csurf');
const dotenv = require('dotenv');
const path = require('path');


//Import config 
dotenv.config({path: path.resolve(__dirname, '.env')})

//create express app
const app = express();

//set security configs
app.use(helmet());
app.use(hpp());

// //set cookie settings
// app.use(
//     session({
//         name:'session', 
//         secret: process.env.secret,

//     })
// )

app.listen(3000, ()=> {
    console.log("server listening on port 3000");
})

module.exports=app;