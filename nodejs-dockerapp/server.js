const express = require('express');

const PORT = 8008;

const app = express();
app.get('/', (req,res)=>{
    res.send("Hello HELL    O")
});

app.listen(PORT);

console.log("HEY IM SERVER.JS");