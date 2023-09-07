const express = require('express');
const app = express();

app.get('/search' , (req,res)=>{
    console.log(req.query);
    let {first , laast} = req.query;
    res.send(`<h1>hi my name is ${first} ${laast}</h1>`);
})

app.listen(8080 ,()=>{
    console.log("server connected at port 8080")
})