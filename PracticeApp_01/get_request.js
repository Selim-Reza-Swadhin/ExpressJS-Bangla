var express = require('express');
var app = express();

app.get('/home', function(req, res) {
    res.end('This is simple get request');
});

//query
app.get('/', function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    //res.send("http://localhost:8080?firstName=selim&lastName=reza");
    res.end(firstName + " " + lastName);
});

//header
app.get('/hg', function(req, res) {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    let UserAgent = req.header('User-Agent');
    //res.send("http://localhost:8080?firstName=selim&lastName=reza");
    res.end(firstName + " " + lastName);
    //res.end(UserAgent);
});


app.listen(8000, function() {
    console.log('Server Run Success: http://localhost:8000');
});