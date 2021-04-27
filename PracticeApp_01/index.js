var express = require('express');
var app = express();

// app.get('/', function(req, res) {
//     res.send('Hello express JS');
// });

//route
app.get('/', function(req, res) {
    res.send('Home Page');
});

app.post('/about', function(req, res) {
    res.send('About Page');
});

app.put('/contact', function(req, res) {
    res.send('Contact Page');
});

app.delete('/terms', function(req, res) {
    res.send('Terms Page');
});

app.listen(8080, function() {
    console.log('Server Run Success: http://localhost:8080');
});