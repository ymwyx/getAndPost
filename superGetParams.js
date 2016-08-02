'use strict'
var request=require('superagent');
request
    .get('localhost:7000/s')
    .type('form')
    .send({'n':'ww'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });
