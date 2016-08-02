'use strict'

var express = require('express');
var app = express();


app.get('/s', function (req, res) {
    res.send(req.params.n);
});

var server = app.listen(7000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});