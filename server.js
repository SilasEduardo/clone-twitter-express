require('dotenv').config();
const express = require('express');
const routs = require('./routes')
const mongooseConnector = require('./mongoose.connector')
const app = express()
app.use(routs);

const {CONNECTING_DB, HTTP_PORT} = process.env


mongooseConnector(CONNECTING_DB)

 app.listen(HTTP_PORT, ()=>{
    console.log('SERVER ON')
})

