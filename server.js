const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())

const data = require("./routes/ragister")
app.use("/",data)

app.listen(4000,()=>{
    console.log("connection done with server 8000")
})