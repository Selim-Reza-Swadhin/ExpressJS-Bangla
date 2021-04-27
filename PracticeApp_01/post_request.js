var express = require('express');
var app = express();

// app.post('/', function(req, res) {
//     res.send('This is simple post request');
// });


//query
app.post('/', function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    //res.send("http://localhost:8080?firstName=selim&lastName=reza");
    res.end(firstName + " " + lastName);
});

//header
app.post('/home', function(req, res) {
    //let userName = req.header('userName');
    let userName = req.header("userName");
    let password = req.header("password");
    res.send("username: "+ userName +" password: "+ password);
});





app.listen(3000, function() {
    console.log('Server Run Success: http://localhost:3000');
});