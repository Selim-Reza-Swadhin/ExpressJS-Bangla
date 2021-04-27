var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.post('/js', function (req, res) {
    let jsonData = req.body;

    //let jsonString = JSON.stringify(jsonData);
    //res.send(jsonString);
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.send(name + " " + city);
});

//npm install body-parser
app.listen(3000, function () {
    console.log('Server Run Success: http://localhost:3000');
});