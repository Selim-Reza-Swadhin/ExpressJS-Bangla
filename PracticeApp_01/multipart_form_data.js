var express = require('express');
var multer = require('multer');
var multer = multer();
var app = express();


//npm install --save multer
//for parsing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));

app.post('/frdata', function(req, res) {
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
});





app.listen(3000, function() {
    console.log('Server Run Success: http://localhost:3000');
});