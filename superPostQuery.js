'use strict'
var request=require('superagent');
request
    .post('localhost:4050/s')
    .type('form')
    .query({'input':'123'})
    .send()
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
