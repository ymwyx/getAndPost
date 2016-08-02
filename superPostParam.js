'use strict'
var request=require('superagent');
request
    .post('localhost:6050/s')
    .type('form')
   //.param({'name':'ym'})
   .send({a:'y,m'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
