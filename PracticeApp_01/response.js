var express = require('express');
var app = express();


//sample string response
//res.send();-->response body
//res.end();-->response ending point


app.get('/one', function(req, res) {
    res.send('This is simple string response');
});

app.post('/two', function(req, res) {
    res.end('This is simple string response');
});

//status code
app.get('/three', function(req, res) {
    //res.status(401).end('Unauth...');
    //same code
    res.status(401);
    res.end('Unauth...');
});

//json code
app.get('/jsonn', function(req, res) {

    let myJsonArray = [{
            name: "selim",
            city: "dhaka",
            occupation: "developer"
        },
        {
            name: "reza",
            city: "natore",
            occupation: "designer"
        },
        {
            name: "swadhin",
            city: "pabna",
            occupation: "back-end developer"
        },
        {
            name: "selima",
            city: "dhaka",
            occupation: "engineer"
        }
    ];

    res.json(myJsonArray);
});

//download code
app.get('/download', function(req, res) {
    res.download("./uploads/abc.jpg");
});


//redirect code
app.get('/bangladesh', function(req, res) {
    res.redirect('http://localhost:8080/india');
});

app.get('/india', function(req, res) {
    res.send('This is a india redirect');
});

//header code
app.get('/headerr', function(req, res) {
    res.append("name", "selim");
    res.append("city", "natore");
    res.append("age", "32");
    res.status(201).end("hello header response");
});

//cookiee code
app.get('/cookiee', function(req, res) {
    res.cookie("name", "rezaa");
    res.cookie("age", "32");
    res.cookie("city", "baraigram");
    res.end("Cookie set success");
});

//clear cookiee code
app.get('/clearr', function(req, res) {
    res.clearCookie("name");
    res.clearCookie("age");
    res.end("Cookie clear success");
});

app.listen(8080, function() {
    console.log('Server Run Success: http://localhost:8080');
});