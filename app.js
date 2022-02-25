const express = require('express')
const mongoose = require('mongoose')
const url =  'mongodb://localhost/LastTry' 

const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open' , function(){
    console.log("connected...")})

app.use(express.json())

const dataRouter = require('./routers/data')
app.use('/data',dataRouter)
    
app.listen(6000, function(){ 
        console.log("server started")
    })








     



