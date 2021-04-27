var express = require('express');
var multer = require('multer');
var app = express();

//npm install --save multer
//for parsing multipart/form-data upload
var storage = multer.diskStorage({
    destination: function(req, file, callBack) {
        callBack(null, './uploadss');
    },
    filename: function(req, file, callBack) {
        callBack(null, file.originalname);
    }
});


var upload = multer({ storage: storage }).single('myFile');



app.post('/', function(req, res) {
    upload(req, res, function(error) {
        if (error) {
            res.send('File upload failed');
        } else {
            res.send('File upload success');
        }
    });
});





app.listen(3000, function() {
    console.log('Server Run Success: http://localhost:3000');
});