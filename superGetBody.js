/**
 * Created by yinmeng on 16-8-2.
 */
'use strict'
var request=require('superagent');
request
    .get('localhost:7050/s')
    .type('form')
    .send({'q':'abc'})
    .end(function(err,res){
        if (res.ok){
            console.log('correct:'+res.text);
        }
        else {
            console.log('error!!!'+res.text);
        }
    });

