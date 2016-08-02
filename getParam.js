/**
 * Created by yinmeng on 16-8-2.
 */
'use strict'

var express = require('express');
var app = express();

app.get('/s', function (req, res) {
    res.send(req.param('ym'));
});

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
