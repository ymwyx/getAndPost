'use strict'
var request=require('superagent');
request
    .get('localhost:8000/s')
    .type('form')
    //.param()
    .send({'ym':'123'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });/**
 * Created by yinmeng on 16-8-2.
 */
