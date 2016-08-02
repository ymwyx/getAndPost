'use strict'

let express=require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// app.get('/uers/tj', function (req, res) {
//     let fun = new func();
//     res.send(fun.dealZipcode(req.params.name));
// });
//
// var server = app.listen(4000, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//
//     console.log('Example app listening at http://%s:%s', host, port);
// });


app.post('/s', function (req, res) {
    res.send(req.body.input);
});

var server = app.listen(4050, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
