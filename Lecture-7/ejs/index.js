const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname, 'public')));

let arr = ['sam' , 'vishal' , 'naman'];

app.post('/' , (req,res)=>{
    // res.send('<h1>hi i am home</h1>')
    res.render('index' , {arr})
})
app.get('/home' , (req,res)=>{
    let randomNum = Math.floor(Math.random()*10);

    res.render('home', {randomNum})
})


app.listen(8080, ()=>{
    console.log("server connected at port 8080")
})