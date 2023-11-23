const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser())
app.get('/', (req,res)=>{
    res.send('cookie seekhlo')
})
// cookie bhejna
app.get('/setcookies' , (req,res)=>{
    res.cookie('mode' , 'dark');
    res.cookie('name' , 'kaccha badam');
    res.cookie('location' , 'gla');
    res.send('cookies set hogyi');
})
// acess all the cookies
app.get('/allcookies' ,(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies)
})

app.listen(5050 , ()=>{
    console.log("server connected at port 5050")
})
