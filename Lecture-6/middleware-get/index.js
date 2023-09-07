const express = require('express');
const app = express();


// app.use('/cat' , (req , res)=>{
//     console.log("hi i am mahesh + cat");
//     res.send('<h1>cat route</h1>')
// })

// app.use('/dog' , (req , res)=>{
//     console.log("hi i am mahesh + dog");
//     res.send('<h1>dog route</h1>')
// })

// app.use('/' , (req , res)=>{
//     console.log("hi i am mahesh + error");
//     res.send('<h1>error</h1>')
// })

app.get('/cat' , (req,res)=>{
    console.log("get request bheji hai at cat");
    res.send("yelo cat response")
})
app.get('/dog' , (req,res)=>{
    console.log("get request bheji hai at dog");
    res.send("yelo dog response")
})
app.get('*' , (req,res)=>{
    res.send('error')
})


app.listen(8080 , ()=>{
    console.log("server is connected at port 8080")
})
