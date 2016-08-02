

'use strict'

let express=require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/s', function (req, res) {
    res.send(req.params.name);
});

var server = app.listen(8050, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
/**
 * Created by yinmeng on 16-8-2.
 */
