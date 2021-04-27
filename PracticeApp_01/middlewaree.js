var express = require('express')
var app = express();


app.use(function(req, res, middlee) {
    console.log('I am middle');
    middlee();
});

//incorrect
// app.get('/', function(req, res, middlee) {
//     res.send("This is home page")
// });

//correct
app.get('/', function(req, res) {
    res.send("This is home page")
});

// app.get('/',function (req,res) {
//     res.send("This is home page")
// })


// app.get('/contact',function (req,res) {
//     res.send("This is contact page")
// })




// app.use('/about',function (req,res,next) {
//     console.log("I am about middleware")
//     next()
// })


// app.get('/about', function(req, res) {
//     res.send("This is about page")
// })


// var myLogger = function(req, res, next) {
//     console.log('LOGGED');
//     next();
// }

// app.use(myLogger)

// app.get('/', function(req, res) {
//     res.send('Hello World!');
// })

app.listen(3000);