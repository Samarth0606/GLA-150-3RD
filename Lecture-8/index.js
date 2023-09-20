const express = require('express');
const app = express();
const path = require('path');

let comments = [
    {
        id:0,
        username:"Manoj Tiwari",
        comment:"baby beer peeke nachreli cham cham cham"
    },
    {
        id:1,
        username:"Punnet Superstar",
        comment:"aaj kal ke nalle berozgaar chappri saale khassi colony ke ladhke ladhkiya"
    },
    {
        id:2,
        username:"Ravi kishan",
        comment:"lahega utha de remote se"
    },
    {
        id:3,
        username:"arpit bala",
        comment:"hum pe to hai hi 9 😛"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({ extended: true }))

app.get('/' , (req,res)=>{
    res.send('<h1>Root route</h1>')
})

// Restful routing

// Read -> displaying all the comments
app.get('/comments' , (req,res)=>{
    res.render('index' , {comments})
})

// displaying form to add new comment
app.get('/comment/new' , (req,res)=>{
    res.render('new');
})

// to actually add the comment
app.post('/comments' , (req,res)=>{
    // console.log(req.body);
    let {username , comment} = req.body;
    comments.push({username , comment, id:comments.length})
    res.redirect('/comments');
})


app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})





// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing 